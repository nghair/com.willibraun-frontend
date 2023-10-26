import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientPage } from './client.page';

const routes: Routes = [
  {
    path: 'c',
    component: ClientPage,
    children: [
      {
        path: 'courses',
        loadChildren: () =>
          import('../client-courses/client-courses.module').then(
            (m) => m.ClientCoursesPageModule
          ),
      },
      {
        path: 'course',
        loadChildren: () =>
          import('../client-course/client-course.module').then(
            (m) => m.ClientCoursePageModule
          ),
      },
      {
        path: 'course/:id',
        loadChildren: () =>
          import('../client-course/client-course.module').then(
            (m) => m.ClientCoursePageModule
          ),
      },
      // {
      //   path: 'tab2',
      //   loadChildren: () =>
      //     import('../tab2/tab2.module').then((m) => m.Tab2PageModule),
      // },
      // {
      //   path: 'tab3',
      //   loadChildren: () =>
      //     import('../tab3/tab3.module').then((m) => m.Tab3PageModule),
      // },
      {
        path: '',
        redirectTo: '/c/courses',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '',
    redirectTo: '/c/courses',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClientPageRoutingModule {}
