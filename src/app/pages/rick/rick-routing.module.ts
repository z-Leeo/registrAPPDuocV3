import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RickPage } from './rick.page';

const routes: Routes = [
  {
    path: '',
    component: RickPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RickPageRoutingModule {}
