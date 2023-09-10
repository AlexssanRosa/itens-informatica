import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-itens-footer',
  templateUrl: './itens-footer.component.html',
  styleUrls: ['./itens-footer.component.css']
})
export class ItensFooterComponent {
  @Input() desenvolvedor = '';


  constructor(private router: Router) {
  }


}
