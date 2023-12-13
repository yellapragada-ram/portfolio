import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Routes } from '@angular/router';

import { MainComponent } from './components/main/main.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { ProjectPageComponent } from './components/project-page/project-page.component';
import { ContactMeComponent } from './components/contact-me/contact-me.component';
import { AppComponent } from './app.component';


const routes: Routes = [
  // {path:'', component: AppComponent},
  {path:'',component: MainComponent},
  {path:'about-me', component:AboutMeComponent},
  {path:'project-file', component:ProjectPageComponent},
  {path:'contact-me', component:ContactMeComponent}
]




@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
