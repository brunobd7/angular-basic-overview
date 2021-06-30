import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello/hello.component';
import { BemVindoComponent } from './bem-vindo/bem-vindo.component';
import { DemoBtstrapComponent } from './demo-btstrap/demo-btstrap.component';

@NgModule({
  declarations: [ //DECLARANDO AO ANGULAR QUE O COMPONENTE ESTA DISPONIVEL
    AppComponent,
    HelloComponent,
    BemVindoComponent,
    DemoBtstrapComponent 
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
