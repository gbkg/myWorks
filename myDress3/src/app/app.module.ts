import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SocialLoginModule, AuthServiceConfig, FacebookLoginProvider} from 'ng4-social-login';
const config = new AuthServiceConfig([
{
  id: FacebookLoginProvider.PROVIDER_ID,
  provider: new FacebookLoginProvider('1699427406869001'),
}
], false);

export function provideConfig(){
  return config;
}

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FrontPageComponent } from './front-page/front-page.component';
import { StyleSelectComponent } from './style-select/style-select.component';
import { MeasurmentComponent } from './measurment/measurment.component';
import { ClothVarComponent } from './cloth-var/cloth-var.component';
import { ProductsComponent } from './products/products.component';
import { CategoriesComponent } from './categories/categories.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { RegistarComponent } from './registar/registar.component';
import { CartComponent } from './cart/cart.component';
import { LoginComponent } from './login/login.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { EnterenceComponent } from './enterence/enterence.component';
import { MyStyleComponent } from './my-style/my-style.component';
import { AuthGuard } from './auth.guard';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { StyleBoxComponent } from './style-box/style-box.component';

import { AngularMaterialModule } from './angular-material/angular-material.module';
import { ApproximateSizeComponent } from './approximate-size/approximate-size.component';
import { SizeOptionComponent } from './size-option/size-option.component';
import { PreciseSizeComponent } from './precise-size/precise-size.component';
import { AddedProductComponent } from './added-product/added-product.component';
import { FriendPreciseSizeComponent } from './measurment/friend-precise-size/friend-precise-size.component';
import { FriendApproximateSizeComponent } from './measurment/friend-approximate-size/friend-approximate-size.component';

@NgModule({
  declarations: [
    AppComponent,
    FrontPageComponent,
    StyleSelectComponent,
    MeasurmentComponent,
    ClothVarComponent,
    ProductsComponent,
    CategoriesComponent,
    ProductDetailComponent,
    RegistarComponent,
    CartComponent,
    LoginComponent,
    FavoritesComponent,
    EnterenceComponent,
    MyStyleComponent,
    NavBarComponent,
    StyleBoxComponent,
    ApproximateSizeComponent,
    SizeOptionComponent,
    PreciseSizeComponent,
    AddedProductComponent,
    FriendPreciseSizeComponent,
    FriendApproximateSizeComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    SocialLoginModule,
    AngularMaterialModule,
  ],
  providers: [
    CookieService,
    AuthGuard,
    {provide: AuthServiceConfig, useFactory: provideConfig},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }


