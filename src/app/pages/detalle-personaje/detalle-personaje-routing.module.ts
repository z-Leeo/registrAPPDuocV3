import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetallePersonajePage } from './detalle-personaje.page';
import { SharedModule } from 'src/app/shared/shared.module';

const routes: Routes = [
  {
    path: '',
    component: DetallePersonajePage
  }
];

@NgModule({
  imports: [SharedModule,RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetallePersonajePageRoutingModule {}
