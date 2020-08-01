import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ArticulosComponent } from './components/articulos/articulos.component';
import { Page404Component } from './components/page404/page404.component';
import { ExperienciaComponent } from './components/experiencia/experiencia.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { ButtonsComponent } from './components/buttons/buttons.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HomeComponent,
    SkillsComponent,
    ArticulosComponent,
    Page404Component,
    ExperienciaComponent,
    NavBarComponent,
    ButtonsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
