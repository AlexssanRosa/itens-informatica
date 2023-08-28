import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewItensComponent } from './new-itens/new-itens.component';
import { ListItensComponent } from './list-itens/list-itens.component';


const routes: Routes = [
  { path: 'cadastro', component: NewItensComponent },
  { path: 'listagem', component: ListItensComponent },
  { path: 'listagem/:busca', component: ListItensComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
