import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponenteTelaLoginComponent } from './componente-tela-login/componente-tela-login.component';
import { ComponenteImagemComponent } from './componente-imagem/componente-imagem.component';
import { ComponenteVideoComponent } from './componente-video/componente-video.component';
import { TesteNgForComponent } from './teste-ng-for/teste-ng-for.component';
import { Pet } from './modelos/Pet';
import { ComponenteTelaHomeComponent } from './componente-tela-home/componente-tela-home.component';


@NgModule({
  declarations: [
    AppComponent,
    ComponenteImagemComponent,
    ComponenteTelaLoginComponent,
    ComponenteVideoComponent,
    TesteNgForComponent,
    ComponenteTelaHomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
