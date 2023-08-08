import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ItensListComponent } from './itens-list/itens-list.component';
import { ItensAppComponent } from './itens-app/itens-app.component';

@NgModule({
  declarations: [
    AppComponent,
    ItensListComponent,
    ItensAppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
