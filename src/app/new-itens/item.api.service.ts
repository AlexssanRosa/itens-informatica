import { Item } from './../model/Item';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ItemApiService {
  url = 'http://localhost:3000/itens';
  editavel: any;

  constructor() { }

  getItens(): Promise<Item[]> {
    return fetch(this.url)
      .then((response) => response.json());
  }

  salvarItem(item: Item): Promise<Item[]> {
    return fetch(this.url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(item),
    }).then((response) => response.json());
  }

  atualizarItem(item: Item): Promise<any> {
    const url = `${this.url}/${item.id}`;
    return fetch(url, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(item),
    }).then((response) => response.json());
  }

  getItemNome(nome: string): Promise<Item[]> {
    const url = `${this.url}?nome=${nome}`;
    return fetch(url)
      .then((response) => response.json());
  }

  setEditavel(item: Item) {
    this.editavel = item;
  }

  getEditavel() {
    return this.editavel;
  }

  deletarItem(item: Item) {
    const url = `${this.url}/${item.id}`;
    fetch(url, {
      method: 'DELETE',
    }).then(() => null);
  }

}




