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
  nome = 'Alexssandro Rosa';
  habilitado = true;
  conteudo = 'O Conteudo do site ainda esta em desenvolvimento.';
  disableMessage(desabilitar: boolean) {
    this.habilitado = desabilitar;
  }


}
document.addEventListener('DOMContentLoaded', function () {
  var elems = document.querySelectorAll('.sidenav');
  var instances = M.Sidenav.init(elems);
});