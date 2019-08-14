import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainCmpComponent }from './main-cmp/main-cmp.component';
import { SignInCmpComponent }from './sign-in-cmp/sign-in-cmp.component';

const routes: Routes = [
  { path: '', redirectTo: '/signIn', pathMatch: 'full' },
  //{ path: 'main', component: MainCmpComponent },
  { path: 'signIn', component: SignInCmpComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
