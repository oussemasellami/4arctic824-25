import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnnoceRoutingModule } from './annoce-routing.module';
import { AnnonceComponent } from './annonce.component';
import { ListComponent } from './list/list.component';




@NgModule({
  declarations: [
    AnnonceComponent,
    ListComponent,
  ],
  imports: [
    CommonModule,
    AnnoceRoutingModule
  ]
})
export class AnnoceModule { }
