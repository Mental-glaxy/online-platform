import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountComponent } from './account/account.component';
import { AuthGuard } from './auth.guard';
import { EdThemesComponent } from './ed-themes/ed-themes.component';
import { LoginComponent } from './login/login.component';
import { MentalTrainerComponent } from './mental-trainer/mental-trainer.component';
import { RegisterComponent } from './register/register.component';
const routes: Routes = [
  { 
    path:"game",
    canActivate: [AuthGuard],
    component:MentalTrainerComponent
  },
  { 
    path:"",
    component:EdThemesComponent
  },
  {
    path:"account",
    canActivate: [AuthGuard],
    component:AccountComponent
  }, 
  {
    path: "login",
    component: LoginComponent
  },
  {
    path:'register',
    component: RegisterComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
