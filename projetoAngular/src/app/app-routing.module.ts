import { NotFoundComponent } from './not-found/not-found.component';
import { ComponenteTelaLoginComponent } from './componente-tela-login/componente-tela-login.component';
import { ComponenteVideoComponent } from './componente-video/componente-video.component';
import { ComponenteImagemComponent } from './componente-imagem/componente-imagem.component';
import { ComponenteTelaHomeComponent } from './componente-tela-home/componente-tela-home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', component: ComponenteTelaLoginComponent},
  {path: 'home', component: ComponenteTelaHomeComponent,
    children: [
      // {path: 'home', component: ComponenteTelaHomeComponent},
      {path: 'imagem', component: ComponenteImagemComponent},
      {path: 'video', component: ComponenteVideoComponent},
    ]
  },
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
