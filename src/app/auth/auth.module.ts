import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AngularMaterialModule} from '../angular-material.module';

import {FormsModule} from '@angular/forms';
import {SignupComponent} from './signup/signup.component';
import {LoginComponent} from './login/login.component';


@NgModule({
  declarations: [
    SignupComponent,
    LoginComponent,
  ],
  imports: [
    CommonModule,
    AngularMaterialModule,
    FormsModule
  ]
})
export class AuthModule {}
