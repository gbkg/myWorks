import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FrontPageComponent } from './front-page/front-page.component';
import { StyleSelectComponent } from './style-select/style-select.component';
import { MeasurmentComponent } from './measurment/measurment.component';
import { ClothVarComponent } from './cloth-var/cloth-var.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { RegistarComponent } from './registar/registar.component';
import { CartComponent } from './cart/cart.component';
import { LoginComponent } from './login/login.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { EnterenceComponent } from './enterence/enterence.component';
import { MyStyleComponent } from './my-style/my-style.component';
import { AuthGuard } from './auth.guard';
import {ApproximateSizeComponent } from './approximate-size/approximate-size.component';

const routes: Routes = [
  { path: '', redirectTo: '/main', pathMatch: 'full' },
  { path: 'main', component: FrontPageComponent },
  { path: 'styling', component: StyleSelectComponent },
  { path: 'measurment', component: MeasurmentComponent },
  { path: 'clothVar', component: ClothVarComponent },
  { path: 'pDetail', component: ProductDetailComponent },
  { path: 'newAcc', component: RegistarComponent },
  { path: 'myCart', component: CartComponent },
  { path: 'login', component: LoginComponent },
  { path: 'favorites', component: FavoritesComponent },
  { path: 'enterence', component: EnterenceComponent },
  { path: 'myStyle', component: MyStyleComponent },
  { path: 'measurment', component: MeasurmentComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
