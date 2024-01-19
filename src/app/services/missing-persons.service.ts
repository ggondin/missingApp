import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MissingPersonService {
  private url = 'https://abitus-api.pjc.mt.gov.br/v1/pessoas/aberto/filtro?';
  private apiUrl = `${this.url}faixaIdadeFinal=0&faixaIdadeInicial=0&nome=&porPagina=12&sexo=&status=DESAPARECIDO&pagina=0`;
  private searchPersonUrl = 'https://abitus-api.pjc.mt.gov.br/v1/pessoas';
  inputPeoples = new BehaviorSubject<any[]>([]);
  constructor(private http: HttpClient) {}

  getAllPersons(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }

  getPerson(id: string): Observable<any> {
    return this.http.get<any>(`${this.searchPersonUrl}/${id}`);
  }

  searchMissingPersons(
    name: string,
    gender: string,
    firstAge: number,
    finalAge: number,
    pageNumber = 12
  ): Observable<any> {
    let searchUrl = `${this.url}&faixaIdadeFinal=${finalAge}&faixaIdadeInicial=${firstAge}&nome=${name}&porPagina=${pageNumber}&sexo=${gender}`;
    return this.http.get<any>(searchUrl);
  }

  getMorePersons(pagina: any): Observable<any>{
    let urlMorePersons = `${this.url}faixaIdadeFinal=0&faixaIdadeInicial=0&nome=&porPagina=12&sexo=&status=DESAPARECIDO&pagina=${pagina}`
    return this.http.get<any>(urlMorePersons)
  }
}
