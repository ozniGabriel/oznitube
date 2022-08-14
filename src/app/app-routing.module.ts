import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BibliotecaComponent } from './components/biblioteca/biblioteca.component';
import { ExplorarComponent } from './components/explorar/explorar.component';
import { HomeComponent } from './components/home/home.component';
import { InscricoesComponent } from './components/inscricoes/inscricoes.component';

import { MainComponent } from './components/main/main.component';
import { ShortsComponent } from './components/shorts/shorts.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'explore',
    component: ExplorarComponent
  },
  {
    path: 'inscricoes',
    component: InscricoesComponent
  },
  {
    path: 'shorts',
    component: ShortsComponent
  },
  {
    path: 'biblioteca',
    component: BibliotecaComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
