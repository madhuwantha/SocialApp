import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {
  MatButtonModule,
  MatCardModule, MatExpansionModule,
  MatInputModule, MatPaginatorModule,
  MatProgressSpinnerModule,
  MatToolbarModule
} from '@angular/material';


// components
import { PostCreateComponent } from './post/post-create/post-create.component';
import { HederComponent } from './herder/heder.component';





// form angular
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { PostListComponent } from './post/post-list/post-list.component';
import { SignupComponent } from './auth/signup/signup.component';
import { LoginComponent } from './auth/login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    PostCreateComponent,
    HederComponent,
    PostListComponent,
    SignupComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatExpansionModule,
    HttpClientModule,
    MatPaginatorModule,
    MatProgressSpinnerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
