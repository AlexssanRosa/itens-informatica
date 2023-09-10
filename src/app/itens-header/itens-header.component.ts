import { Component, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-itens-header',
  templateUrl: './itens-header.component.html',
  styleUrls: ['./itens-header.component.css']
})
export class ItensHeaderComponent {
  searching = false;
  @Output() disable = new EventEmitter<boolean>();
  conteudo = '';
  constructor(private router: Router) { }

  //Funções para habilitar e desabilitar consulta e mensagem da tela de inicio
  toggleSearch() {
    this.searching = true;
  }

  cancelSearch() {
    this.searching = false;
  }

  disableMessage(value: boolean) {
    this.disable.emit(value);
  }

  //passa conteudo via navegação de rotas
  pesquisa() {
    this.router.navigate(['/listagem', this.conteudo]);
    this.conteudo = '';
    this.disableMessage(false);
  }

}
