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

  toggleSearch() {
    this.searching = true;
  }

  cancelSearch() {
    this.searching = false;
  }

  disableMessage(value: boolean) {
    this.disable.emit(value);
  }

  pesquisa() {
    this.router.navigate(['/listagem', this.conteudo]);
    this.conteudo = '';
    this.disableMessage(false);
  }

}
