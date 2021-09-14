import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthPageComponent } from './auth-page/auth-page.component';
import { AuthGuard } from './auth.guard';
import { PreregUsersComponent } from './prereg-users/prereg-users.component';

const routes: Routes = [
  // canActivate:[AuthGuard]
  {component: PreregUsersComponent, path: 'users'},
  {component: AuthPageComponent,path:'auth'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
