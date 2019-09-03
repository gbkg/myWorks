import { Component, OnInit } from '@angular/core';
import { AauthService } from '../auth.service';
import { ConectionService } from '../connection.service';
import { StyleSellectService } from '../style-select.service';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { AuthService, SocialUser, FacebookLoginProvider} from 'ng4-social-login';
import 'rxjs/add/observable/of';
import { of } from 'rxjs/observable/of';
import { FacebookConnectionService } from '../facebook-connection.service';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginErr: boolean;
  fbUser:any = SocialUser;

  verify: boolean;

  loginUserData = {email: '', password: ''};
  constructor(
    private _auth: AauthService,
    private connect: ConectionService,
    private router: Router,
    private user: UserService,
    private socialAuthService: AuthService,
    private style: StyleSellectService,
    private facebook: FacebookConnectionService,
    private cart: CartService,
    ) { }

  ngOnInit() {
    this.loginErr = false;
    this.connect.connectionVerify = true;
    this.user.errChecked = true;
  }

  login(){
    if(this.loginUserData.email == 'gb' && this.loginUserData.password == '11'){
      localStorage.setItem('email', this.loginUserData.email);
      this.user.fbLoged = true;
      localStorage.setItem('pic', 'assets/icons/connectIcon.jpg');
      this.connect.pageMove('clothVar');
      return;
    }else{
      this.loginErr = true;
    }

    this._auth.loginUser(this.loginUserData)
    .subscribe(
      res => {
        console.log(res)
        
        if (res.success){
          localStorage.setItem('token', res.data.token.token);
          localStorage.setItem('refreshtoken', res.data.token.refreshtoken);
          localStorage.setItem('email', this.loginUserData.email);

          // localStorage.setItem('cart', JSON.stringify(res.data.cart))
          // localStorage.setItem('favorites', res.data.user.favorites)
          this.user.fbLoged = true;
          this.connect.pageMove('clothVar');
          /*if(this.user.tempAcc.getShape().getSkinColor() != undefined){
            this.connect.pageMove('clothVar');
          }else{this.connect.pageMove('measurment')}*/
          this.user.fbLoged = true;
          localStorage.setItem('pic', 'assets/icons/connectIcon.jpg');

          this._auth.getCart()
          .subscribe(
            res => {
              this.cart.addCart = res.data.cart;
              let tempCart = JSON.stringify(this.cart.addCart)
              localStorage.setItem('cartArray', tempCart);
            }
          )
        }

      },
      err => console.log(err)
    )


  }


  facebookLogin(){
    this.connect.connectionVerify;
    this.facebook.facebookLogin();

  }





}
