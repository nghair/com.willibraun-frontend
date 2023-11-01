import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClientCoursePage } from './client-course.page';

const routes: Routes = [
  {
    path: '',
    component: ClientCoursePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClientCoursePageRoutingModule {}
