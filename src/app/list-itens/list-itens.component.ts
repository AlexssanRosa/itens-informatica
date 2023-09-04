import { ItemService } from './../new-itens/item.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Item } from '../model/Item';

@Component({
  selector: 'app-list-itens',
  templateUrl: './list-itens.component.html',
  styleUrls: ['./list-itens.component.css']
})
export class ListItensComponent implements OnInit {
  achou = false;
  conteudo = '';
  itens: Item[] = [];
  constructor(private route: ActivatedRoute, private itemService: ItemService, private router: Router) { }

  popularTabela() {
    this.itens = this.itemService.getItem();
  }

  apagar(item: Item) {
    this.itemService.deletarItem(item);
    this.popularTabela();
  }

  editar(item: Item) {
    this.itemService.setEditavel(item);
    this.router.navigate(['/cadastro']);
  }

  ngOnInit() {

    this.route.paramMap.subscribe(params => {
      const resultado = params.get('busca');
      if (resultado != null) {
        this.conteudo = resultado.toString();
        this.achou = true;
        this.itens = this.itemService.getItemNome(this.conteudo);
      }
      else {
        this.itens = this.itemService.getItem();
      }
    });
  }



}


