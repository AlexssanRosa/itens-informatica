import { Item } from './../model/Item';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, from, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ItemApiService {

  constructor(private http: HttpClient) { }
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })
  };
  url = 'http://localhost:3000/itens';
  editavel: any;


  //Service utiliza observable com subscribe nos componentes que listam  ou preenchem dados

  getItens(): Observable<Item[]> {
    return this.http.get<Item[]>(this.url);
  }

  salvarItem(item: Item): Observable<Item> {
    return this.http.post<Item>(this.url, item, this.httpOptions);
  }

  //é utlizado um retorno any para que possa ser usado o subscribe mais facilmente no componete list-itens
  deletarItem(item: Item): Observable<any> {
    const url = `${this.url}/${item.id}`;
    return this.http.delete(url, this.httpOptions);
  }

  atualizarItem(item: Item): Observable<Item> {
    const url = `${this.url}/${item.id}`;
    return this.http.put<Item>(url, item, this.httpOptions);
  }

  getItemNome(nome: string): Observable<Item[]> {
    const url = `${this.url}?nome=${nome}`;
    return this.http.get<Item[]>(url);

  }

  setEditavel(item: Item) {
    this.editavel = item;
  }

  getEditavel() {
    return this.editavel;
  }



}




