import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AddflightComponent } from './addflight/addflight.component';
import { RouterModule, Routes } from '@angular/router';

const appRouter:Routes=[
  {
    path:"",component:AddflightComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AddflightComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
