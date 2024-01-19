import { Component, OnInit } from '@angular/core';
import { MissingPersonService } from 'src/app/services/missing-persons.service';

@Component({
  selector: 'app-base-page',
  templateUrl: './base-page.component.html',
  styleUrls: ['./base-page.component.scss'],
})
export class BasePageComponent implements OnInit {
  people: any[] = [];
  

  constructor(private missingPersonService: MissingPersonService) {}
  ngOnInit(): void {}


}
