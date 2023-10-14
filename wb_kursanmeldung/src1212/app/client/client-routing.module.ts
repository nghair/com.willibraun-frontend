import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientPage } from './client.page';

const routes: Routes = [
  {
    path: 'client',
    component: ClientPage,
    children: [
      {
        path: 'dashboard',
        loadChildren: () =>
          import('../client-dashboard/client-dashboard.module').then(
            (m) => m.ClientDashboardPageModule
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
        redirectTo: '/client/dashboard',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '',
    redirectTo: '/client/dashboard',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClientPageRoutingModule {}
