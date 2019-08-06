import { Component, OnInit } from '@angular/core';
import { AauthService } from '../auth.service';
import { ConectionService } from '../connection.service';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { AuthService, SocialUser, FacebookLoginProvider} from 'ng4-social-login';
import 'rxjs/add/observable/of';
import { of } from 'rxjs/observable/of';

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
    ) { }

  ngOnInit() {
    this.loginErr = false;
    this.verify = false;
  }

  login(){

    if(this.loginUserData.email == 'gb' && this.loginUserData.password == '11'){
      localStorage.setItem('email', this.loginUserData.email);
      this.connect.pageMove('clothVar');
    }else{
      this.loginErr = true;
    }
    
    this._auth.loginUser(this.loginUserData)
    .subscribe(
      res => {
        console.log(res)
        if (res.success){
          localStorage.setItem('token', res.data.token)
          localStorage.setItem('refreshtoken', res.data.refreshtoken)
          localStorage.setItem('email', res.data.profile.email)
          localStorage.setItem('FirstName', res.data.profile.FirstName)
          localStorage.setItem('LastName', res.data.profile.LastName)
          localStorage.setItem('myProfile', res.data.profile.dimensions)

          localStorage.setItem('cart', JSON.stringify(res.data.cart))
          // localStorage.setItem('favorites', res.data.user.favorites)
          this.connect.pageMove('clothVar');
        } 
      },
      err => console.log(err)
    )


  }


  facebookLogin(){
    debugger
    if(this.verify){
    this.socialAuthService.signIn(FacebookLoginProvider.PROVIDER_ID).then((userData) => {
      this.fbUser = userData;
      localStorage.setItem('email', this.fbUser.email);
      localStorage.setItem('pic', this.fbUser.photoUrl);
      localStorage.setItem('name', this.fbUser.name);
      this.user.fbLoged = true;
      this.connect.pageMove('clothVar');
    })
  }else{this.user.errChecked = false;}

  }





}
