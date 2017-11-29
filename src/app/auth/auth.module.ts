import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import {LoginComponent} from "./login/login.component";
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import {AuthGuard} from "./auth.guard";

@NgModule({
  imports: [
    CommonModule,
    AuthRoutingModule
  ],
  declarations: [
    LoginComponent,
    AdminPanelComponent
  ],
  providers: [
    AuthGuard
  ]
})
export class AuthModule { }
