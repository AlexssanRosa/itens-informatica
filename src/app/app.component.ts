import { Component } from '@angular/core';
import * as M from 'materialize-css'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'itens-informatica';
  FlowText = 'flow-text';
  conteudo: string;
  constructor() {
    this.conteudo = 'O Conteúdo da página ainda está em desenvolvimento';
  }
}
document.addEventListener('DOMContentLoaded', function () {
  var elems = document.querySelectorAll('.sidenav');
  var instances = M.Sidenav.init(elems);
});