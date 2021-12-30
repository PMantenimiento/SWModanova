import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login';
import { HomeComponent } from './home';

@NgModule({
  
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
