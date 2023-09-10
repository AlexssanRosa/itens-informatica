import { ItemService } from './item.service';
import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import * as M from 'materialize-css';
import { Item } from '../model/Item';
import { ItemApiService } from './item.api.service';

@Component({
  selector: 'app-new-itens',
  templateUrl: './new-itens.component.html',
  styleUrls: ['./new-itens.component.css']
})
export class NewItensComponent implements OnInit, AfterViewInit {

  @ViewChild('form') form!: NgForm;
  erros: boolean[] = [true, true, true, true, true];
  aviso_nome = '';
  aviso_marca = '';
  aviso_tipo = '';
  aviso_qtd = '';
  aviso_data = '';
  bloquear = true;
  todos: Item[] = [];
  editavel: any;
  constructor(private api: ItemApiService) { }
  edicao = false;

  itens: Item = {
    id: 0,
    nome: '',
    marca: '',
    tipo: '',
    qtd: '',
    data: ''
  };

  ngOnInit(): void {
    this.api.getItens().subscribe((itens: Item[]) => { this.todos = itens; });
    this.editavel = this.api.getEditavel();
    if (this.editavel.id != 0) {
      this.itens.id = this.editavel.id;
      this.itens.nome = this.editavel.nome;
      this.itens.marca = this.editavel.marca;
      this.itens.tipo = this.editavel.tipo;
      this.itens.qtd = this.editavel.qtd;
      this.itens.data = this.editavel.data;
      this.erros = [false, false, false, false, false];
      this.edicao = true;
    }
  }

  ngAfterViewInit() {
    M.updateTextFields();
  }

  validanome() {
    if ((this.itens.nome.match(/^[a-zA-Z0-9À-ÖØ-öø-ÿ\s]+$/)) && this.itens.nome.length > 0) {
      this.erros[0] = false;
    }
    else {
      this.erros[0] = true;
      this.aviso_nome = "O Nome deve conter apenas letras e numeros / Não pode ser vazio";
    }
  }
  validamarca() {
    if ((this.itens.marca.match(/^[a-zA-Z0-9À-ÖØ-öø-ÿ\s]+$/)) && this.itens.marca.length > 0) {
      this.erros[1] = false;
    }
    else {
      this.erros[1] = true;
      this.aviso_marca = "A Marca deve conter apenas letras e numeros/ Não pode ser vazio";
    }

  }
  validatipo() {
    if ((this.itens.tipo.match(/^[A-Za-zÀ-ÿ\s]+$/)) && this.itens.tipo.length > 0) {
      this.erros[2] = false;
    }
    else {
      this.erros[2] = true;
      this.aviso_tipo = "O Tipo deve conter apenas letras / Não pode ser vazio";
    }
  }
  validaqtd() {
    if ((this.itens.qtd.match(/^[0-9]+$/)) && this.itens.qtd.length > 0) {
      this.erros[3] = false;
    }
    else {
      this.erros[3] = true;
      this.aviso_qtd = "A Quantidade deve conter apenas numeros / Não pode ser vazio";
    }
  }
  validadata() {
    if ((this.itens.data.match(/^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$/)) && this.itens.data.length > 0) {
      this.erros[4] = false;
    }
    else {
      this.erros[4] = true;
      this.aviso_data = "A data deve ser dia/mes/ano(dd/mm/yyyy) / Não pode ser vazio";
    }

  }

  desabilita() {
    if (this.erros.every(value => value === false)) {
      return false;
    }
    else {
      return true;
    }
  }


  limparCampos() {
    this.form.reset;
    this.erros = [true, true, true, true, true];
    this.itens = {
      id: 0,
      nome: '',
      marca: '',
      tipo: '',
      qtd: '',
      data: ''
    };
    this.aviso_nome = '';
    this.aviso_marca = '';
    this.aviso_tipo = '';
    this.aviso_qtd = '';
    this.aviso_data = '';
    this.api.setEditavel(this.itens);
    this.edicao = false;

  }

  Enviar() {
    //Atualizar Itens
    if (this.edicao === true) {
      this.api.atualizarItem(this.itens).subscribe(item => this.todos.push(item));
      M.toast({
        html: 'Item atualizado com sucesso!',
        classes: 'green lighten-2 white-text'
      });
      this.limparCampos();
    }
    else {
      //Novos itens
      if (this.todos.length === 0) {
        this.itens.id = 1;
      }
      else {
        this.itens.id = this.todos[this.todos.length - 1].id + 1;
      }
      this.api.salvarItem(this.itens).subscribe(item => this.todos.push(item));
      M.toast({
        html: 'Item cadastro com sucesso!',
        classes: 'green lighten-2 white-text'
      });
      this.limparCampos();
    }
  }
}
