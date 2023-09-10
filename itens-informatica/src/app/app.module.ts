import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ItensFooterComponent } from './itens-footer/itens-footer.component';
import { ItensHeaderComponent } from './itens-header/itens-header.component';
import { NewItensComponent } from './new-itens/new-itens.component';
import { ListItensComponent } from './list-itens/list-itens.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';





@NgModule({
  declarations: [
    AppComponent,
    ItensFooterComponent,
    ItensHeaderComponent,
    NewItensComponent,
    ListItensComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
