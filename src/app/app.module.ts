import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MatButtonModule, MatCardModule, MatInputModule } from '@angular/material';


// components
import { PostCreateComponent } from './post/post-create/post-create.component';




// form angular
import {FormsModule} from '@angular/forms';
import { HederComponent } from './heder/heder.component';



@NgModule({
  declarations: [
    AppComponent,
    PostCreateComponent,
    HederComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
