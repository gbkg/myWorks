import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainCmpComponent } from './main-cmp/main-cmp.component';
import { SignInCmpComponent } from './sign-in-cmp/sign-in-cmp.component';
import { NewCmpComponent } from './new-cmp/new-cmp.component';
import { LoginCmpComponent } from './login-cmp/login-cmp.component';

@NgModule({
  declarations: [
    AppComponent,
    MainCmpComponent,
    SignInCmpComponent,
    NewCmpComponent,
    LoginCmpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
