import { Injectable } from '@angular/core';
import { Item } from '../model/Item';




@Injectable({
  providedIn: 'root'
})
export class ItemService {

  itens: Item[] = [];
  editavel: any;

  constructor() {
    this.carregarLocalStorage;
  }

  private carregarLocalStorage() {
    const itensJson = localStorage.getItem('itens');
    if (itensJson) {
      this.itens = JSON.parse(itensJson);
    }
  }

  private salvarLocalStorage(itens: Item[]) {
    localStorage.setItem('itens', JSON.stringify(itens));
  }

  salvarItem(item: Item) {
    this.itens.push(item);
    this.salvarLocalStorage(this.itens);
  }

  getItem() {
    return this.itens;
  }

  getItemNome(Nome: string) {
    return this.itens.filter(item => item.nome === Nome);
  }

  atualizarItem(item: Item) {
    const index = this.itens.findIndex(i => i.id === item.id);
    if (index !== -1) {
      this.itens[index] = item;
      this.salvarLocalStorage(this.itens);
    }
  }

  deletarItem(item: Item) {
    const index = this.itens.findIndex(i => i.id === item.id);
    if (index !== -1) {
      this.itens.splice(index, 1);
      this.salvarLocalStorage;
    }
  }

  setEditavel(item: Item) {
    this.editavel = item;
  }

  getEditavel() {
    return this.editavel;
  }

}
