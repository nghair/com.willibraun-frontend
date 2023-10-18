import { NgModule } from '@angular/core';

import { ForgotPasswordPageRoutingModule } from './forgot-password-routing.module';

import { ForgotPasswordPage } from './forgot-password.page';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [SharedModule, ForgotPasswordPageRoutingModule],
  declarations: [ForgotPasswordPage],
})
export class ForgotPasswordPageModule {}
