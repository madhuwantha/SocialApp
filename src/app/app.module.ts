import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';


// components

import { HederComponent } from './herder/heder.component';
import { ErrorComponent } from './error/error.component';




// form angular
import {AuthInterceptor} from './services/auth/auth-interceptor';
import {ErrorInterceptor} from './error-interceptor';
import {AngularMaterialModule} from './angular-material.module';
import {PostModule} from './post/post.module';
import {AuthModule} from './auth/auth.module';


@NgModule({
  declarations: [
    AppComponent,
    HederComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AngularMaterialModule,
    PostModule,
    AuthModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }
  ],
  bootstrap: [AppComponent],
  entryComponents: [ErrorComponent]
})
export class AppModule { }
