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
  conteudo = 'Seja bem vindo ao site, para navegar utilize os menus, aqui é possível cadastrar, consultar, alterar e excluir seus itens de informática';
  //Recebe via output para desabilitar componente quando sai da tela inicial
  disableMessage(desabilitar: boolean) {
    this.habilitado = desabilitar;
  }


}
document.addEventListener('DOMContentLoaded', function () {
  var elems = document.querySelectorAll('.sidenav');
  var instances = M.Sidenav.init(elems);
});