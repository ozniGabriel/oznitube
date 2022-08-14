import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { SideMenuComponent } from './components/side-menu/side-menu.component';
import { MainComponent } from './components/main/main.component';
import { ExplorarComponent } from './components/explorar/explorar.component';
import { InscricoesComponent } from './components/inscricoes/inscricoes.component';
import { ShortsComponent } from './components/shorts/shorts.component';
import { BibliotecaComponent } from './components/biblioteca/biblioteca.component';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    SideMenuComponent,
    MainComponent,
    ExplorarComponent,
    InscricoesComponent,
    ShortsComponent,
    BibliotecaComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
