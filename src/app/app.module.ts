import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { HomeeComponent } from './homee/homee.component';
import {FormsModule} from '@angular/forms';
import { ResidenceComponent } from './residence/residence.component'
import{RouterModule, Routes} from '@angular/router';
import { NotfoundComponent } from './notfound/notfound.component';
import { AppRoutingModule } from './app-routing.module';
import { AnnonceComponent } from './annonce/annonce.component';
import { ListComponent } from './annonce/list/list.component'
import { AnnoceModule } from './annonce/annoce.module';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    HomeeComponent,
    ResidenceComponent,
    NotfoundComponent,
   
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    AnnoceModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
