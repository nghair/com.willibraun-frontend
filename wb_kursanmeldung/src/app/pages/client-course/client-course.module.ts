import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ClientCoursePageRoutingModule } from './client-course-routing.module';

import { ClientCoursePage } from './client-course.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ClientCoursePageRoutingModule
  ],
  declarations: [ClientCoursePage]
})
export class ClientCoursePageModule {}
