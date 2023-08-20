import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ItensFooterComponent } from './itens-footer/itens-footer.component';
import { ItensHeaderComponent } from './itens-header/itens-header.component';


@NgModule({
  declarations: [
    AppComponent,
    ItensFooterComponent,
    ItensHeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
