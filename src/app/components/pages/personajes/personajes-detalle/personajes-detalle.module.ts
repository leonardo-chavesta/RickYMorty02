import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PersonajesDetalleRoutingModule } from './personajes-detalle-routing.module';
import { PersonajesDetalleComponent } from './personajes-detalle.component';


@NgModule({
  declarations: [
    PersonajesDetalleComponent
  ],
  imports: [
    CommonModule,
    PersonajesDetalleRoutingModule
  ]
})
export class PersonajesDetalleModule { }
