import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClientCoursesPage } from './client-courses.page';

const routes: Routes = [
  {
    path: '',
    component: ClientCoursesPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClientCoursesPageRoutingModule {}
