import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MissingPersonService } from 'src/app/services/missing-persons.service';

@Component({
  selector: 'app-search-field',
  templateUrl: './search-field.component.html',
  styleUrls: ['./search-field.component.scss']
})
export class SearchFieldComponent implements OnInit {
  nome: any;
  sexo: any;
  faixaIdadeInicial: any;
  faixaIdadeFinal: any;
  peoples: any[] = [];
  inputPeoples: any[] = [];
  @Output() inputPeoplesChange = new EventEmitter<any[]>();

  constructor(private missingPersonService: MissingPersonService) { }

  ngOnInit(): void {
  }

  search(): void {
    this.missingPersonService.searchMissingPersons(this.nome, this.sexo, this.faixaIdadeInicial, this.faixaIdadeFinal).subscribe(res => {
      this.inputPeoples = res.content;
      this.inputPeoplesChange.emit(this.inputPeoples);
      this.missingPersonService.inputPeoples.next(this.inputPeoples);
    });
  }


  clean(){
    this.nome = '';
    this.sexo = '';
    this.faixaIdadeInicial = null;
    this.faixaIdadeFinal = null;
    this.peoples = [];
    this.inputPeoples = []
    this.inputPeoplesChange.emit(this.inputPeoples);
    this.missingPersonService.inputPeoples.next(this.inputPeoples);
  }

}

