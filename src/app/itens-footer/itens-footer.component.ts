import { Component } from '@angular/core';

@Component({
  selector: 'app-itens-footer',
  templateUrl: './itens-footer.component.html',
  styleUrls: ['./itens-footer.component.css']
})
export class ItensFooterComponent {
  nome: String;

  constructor() {
    this.nome = 'Alexssandro Rosa'
  }


}
