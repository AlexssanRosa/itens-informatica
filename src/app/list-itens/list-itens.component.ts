import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-list-itens',
  templateUrl: './list-itens.component.html',
  styleUrls: ['./list-itens.component.css']
})
export class ListItensComponent implements OnInit {
  achou = false;
  conteudo = '';
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const resultado = params.get('busca');
      if (resultado != null) {
        this.conteudo = resultado.toString();
        this.achou = true;
      }
    });
  }



}


