import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PersonajesListRoutingModule } from './personajes-list-routing.module';
import { PersonajesListComponent } from './personajes-list.component';


@NgModule({
  declarations: [
    PersonajesListComponent
  ],
  imports: [
    CommonModule,
    PersonajesListRoutingModule
  ]
})
export class PersonajesListModule { }
