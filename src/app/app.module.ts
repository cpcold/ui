import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";


import { AppRoutingModule,rountingComponent } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserManagementComponent } from './user-management/user-management.component';
import { LoginSignupComponent } from './user-management/login-signup/login-signup.component';
import { DisplaytaskComponent } from './task-management/displaytask/displaytask.component';
import { AuthInterceptor } from "./user-management/login-signup/auth-interceptor";
import {
  MatInputModule,
} from "@angular/material";
@NgModule({
  declarations: [
    AppComponent,
    UserManagementComponent,
    LoginSignupComponent,
    rountingComponent,
    DisplaytaskComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    MatInputModule,
    HttpClientModule
  ],
  providers: [{provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
