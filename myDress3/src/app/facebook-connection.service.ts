import { Injectable } from '@angular/core';
import { AuthService, SocialUser, FacebookLoginProvider} from 'ng4-social-login';
import { ConectionService } from './connection.service';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class FacebookConnectionService {
  loginErr: boolean;
  fbUser:any = SocialUser;

  verify: boolean;

  loginUserData = {email: '', password: ''};

  constructor(
    private connect: ConectionService,
    private user: UserService,
    private socialAuthService: AuthService,
  ) { }



  facebookLogin(){
    if(this.connect.connectionVerify){
    this.socialAuthService.signIn(FacebookLoginProvider.PROVIDER_ID).then((userData) => {
      this.fbUser = userData;
      localStorage.setItem('email', this.fbUser.email);
      localStorage.setItem('pic', this.fbUser.photoUrl);
      localStorage.setItem('name', this.fbUser.name);
      this.user.fbLoged = true;
      if(this.user.tempAcc.getShape().getSkinColor() != undefined){
        this.connect.pageMove('clothVar');
        }else{this.connect.pageMove('measurment')} 
    })
  }else{this.user.errChecked = false;}

  }
}
