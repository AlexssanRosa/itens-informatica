import { ItemApiService } from './../new-itens/item.api.service';
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
  constructor(private route: ActivatedRoute, private router: Router, private api: ItemApiService) { }

  //Funções para preencher a lista assim como permitir as operações alterar e deletar
  popularTabela() {
    this.api.getItens().subscribe((data: Item[]) => { this.itens = data; });
  }

  apagar(item: Item) {
    this.api.deletarItem(item).subscribe();
    this.popularTabela();
  }

  editar(item: Item) {
    this.api.setEditavel(item); //uso para passa o conteudo que vai ser editado e recuperado na tela de form
    this.router.navigate(['/cadastro']);
  }

  ngOnInit() {

    //recebe parametro para pesquisa via rota
    this.route.paramMap.subscribe(params => {
      const resultado = params.get('busca');
      if (resultado != null) {
        this.conteudo = resultado.toString();
        this.achou = true;
        this.api.getItemNome(this.conteudo).subscribe((data: Item[]) => { this.itens = data; });
      }
      else {
        this.api.getItens().subscribe((data: Item[]) => { this.itens = data; });
      }
    });
  }



}


