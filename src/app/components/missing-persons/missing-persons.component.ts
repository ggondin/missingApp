import { Component, Input, OnInit, HostListener } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AboutComponent } from 'src/app/dialog/about/about.component';
import { MissingPersonService } from 'src/app/services/missing-persons.service';

@Component({
  selector: 'app-missing-persons',
  templateUrl: './missing-persons.component.html',
  styleUrls: ['./missing-persons.component.scss'],
})
export class MissingPersonsComponent implements OnInit {
  isLargeScreen = false;
  peoples: any[] = [];
  newPeoples: any[] = [];
  page: number = 1;
  getForLinks: any;
  hasInstagram: any;
  @Input() unicPeople: any;

  constructor(
    private missingPersonService: MissingPersonService,
    private dialog: MatDialog,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.getPersons();
    this.getResult();
    this.isLargeScreen = window.innerWidth <= 1600;
  }

  @HostListener('window:resize')
  onResize() {
    this.isLargeScreen = window.innerWidth <= 1600;
  }

  getResult() {
    this.missingPersonService.inputPeoples.subscribe((inputPeoples) => {
      this.newPeoples = inputPeoples;
      if (this.newPeoples.length === 0) {
        this.getPersons();
      } else {
        this.peoples = this.newPeoples;
      }
    });
  }

  getPersons() {
    this.missingPersonService.getAllPersons().subscribe((data) => {
      this.peoples = data.content;
    });
  }

  openDialog(peopleId: string) {
    this.missingPersonService.getPerson(peopleId).subscribe((data) => {
      this.unicPeople = data;
      const dialogRef = this.dialog.open(AboutComponent, {
        width: '60%',
        height: '80%',
        data: { person: this.unicPeople },
      });
      dialogRef.afterClosed().subscribe((result) => {});
    });
  }

  getMorePersons() {
    this.getPersonsService();
    this.page++;
  }

  getPersonsService() {
    this.missingPersonService.getMorePersons(this.page).subscribe((data) => {
      this.peoples = this.peoples.concat(data.content);
    });
  }

  instagramButton(id: any) {
    this.missingPersonService.getPerson(id).subscribe((data) => {
      this.getForLinks = data;
      const url = this.getForLinks.ultimaOcorrencia.listaCartaz[0]?.urlCartaz;

      if (url) {
        let a = document.createElement('a');
        a.href = url;
        a.download = 'output.jpg';
        a.click();
      } else {
        this.snackBar.open('Não há URL disponível para o cartaz', 'Fechar', {
          duration: 2000,
        });
      }
    });
  }

  generateWhatsAppMessage(person: any): string {
    let message = `PESSOA DESAPARECIDA: ${person.nome} de ${person.idade} anos, está DESAPARECIDA. Saiba mais em: https://desaparecidos.pjc.mt.gov.br/pessoa-desaparecida/${person.id}`;
    return message;
  }

  sendWhatsAppMessage(person: any) {
    let message = this.generateWhatsAppMessage(person);
    let whatsappUrl = `https://wa.me/?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl);
  }

  shareOnFacebook(person: any) {
    let url = `https://desaparecidos.pjc.mt.gov.br/pessoa-desaparecida/${person.id}`;
    let facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
    window.open(facebookUrl, '_blank');
  }


}
