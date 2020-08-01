import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Page404Component } from './components/page404/page404.component';
import {ExperienciaComponent} from './components/experiencia/experiencia.component'
import { SkillsComponent } from './components/skills/skills.component';
import { ArticulosComponent } from './components/articulos/articulos.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {path: 'experiencia', component: ExperienciaComponent},
  {path: 'skills', component: SkillsComponent},
  {path: 'articulos', component: ArticulosComponent},
  {path: '', component: HomeComponent},
  {path: '**', component: Page404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
