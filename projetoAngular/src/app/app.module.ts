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
import { ComponenteTesteComponent } from './componente-teste/componente-teste.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { MasterComponent } from './master/master.component';


@NgModule({
  declarations: [
    AppComponent,
    ComponenteImagemComponent,
    ComponenteTelaLoginComponent,
    ComponenteVideoComponent,
    TesteNgForComponent,
    ComponenteTelaHomeComponent,
    ComponenteTesteComponent,
    UsuarioComponent,
    NotFoundComponent,
    MasterComponent,
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
