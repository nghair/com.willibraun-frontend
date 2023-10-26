import { NgModule } from '@angular/core';

import { ClientCoursesPageRoutingModule } from './client-courses-routing.module';

import { ClientCoursesPage } from './client-courses.page';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  imports: [SharedModule, ClientCoursesPageRoutingModule],
  declarations: [ClientCoursesPage],
})
export class ClientCoursesPageModule {}
