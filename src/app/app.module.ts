import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';

import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { CardModule } from 'primeng/card';

import { ButtonModule } from 'primeng/button';

import { SplitterModule } from 'primeng/splitter';

import { KnobModule } from 'primeng/knob';

import { MainComponent } from './components/main/main.component';

import { AboutMeComponent } from './components/about-me/about-me.component';


import { ProjectPageComponent } from './components/project-page/project-page.component';

import { ContactMeComponent } from './components/contact-me/contact-me.component';

import { InputTextModule } from 'primeng/inputtext';

@NgModule({
  declarations: [
    AppComponent,
    AboutMeComponent,
    MainComponent,
    ProjectPageComponent,
    ContactMeComponent],
  imports: [
    BrowserModule,
    FormsModule,
    CardModule,
    ButtonModule,
    SplitterModule,
    KnobModule,
    InputTextModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

