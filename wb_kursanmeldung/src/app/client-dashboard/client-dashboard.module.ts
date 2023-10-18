import { NgModule } from '@angular/core';

import { ClientDashboardPageRoutingModule } from './client-dashboard-routing.module';

import { ClientDashboardPage } from './client-dashboard.page';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [SharedModule, ClientDashboardPageRoutingModule],
  declarations: [ClientDashboardPage],
})
export class ClientDashboardPageModule {}
