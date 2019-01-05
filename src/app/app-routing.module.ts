import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TaskManagementComponent } from './task-management/task-management.component';
import { AddtasksComponent } from './task-management/addtasks/addtasks.component';
import { LoginSignupComponent } from './user-management/login-signup/login-signup.component';
import { AuthGuard } from "../app/user-management/login-signup/auth.guard";

const routes: Routes = [
  {path : "" ,pathMatch:"full",component:LoginSignupComponent},
  {path: 'displaytask' ,pathMatch:"full" ,component: TaskManagementComponent,canActivate: [AuthGuard]},
  {path: 'addtasks' ,pathMatch:"full", component:AddtasksComponent,canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule { }

export const rountingComponent = [TaskManagementComponent,AddtasksComponent]
