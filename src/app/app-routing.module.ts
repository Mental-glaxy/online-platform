import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PreregUsersComponent } from './prereg-users/prereg-users.component';

const routes: Routes = [
  {component:PreregUsersComponent, path: 'users'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
