import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'',
    redirectTo:'home',
    pathMatch: 'full',   
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./components/pages/home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'personajes-list',
    loadChildren: () =>
      import('./components/pages/personajes/personajes-list/personajes-list.module').then(m => m.PersonajesListModule)
  },
  {
    path: 'personajes-detalle/:id',
    loadChildren: () =>
      import('./components/pages/personajes/personajes-detalle/personajes-detalle.module').then(m => m.PersonajesDetalleModule)
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
