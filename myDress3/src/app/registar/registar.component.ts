import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { AauthService } from '../auth.service';
import { ConectionService } from '../connection.service';
import { FacebookConnectionService } from '../facebook-connection.service'

@Component({
  selector: 'app-registar',
  templateUrl: './registar.component.html',
  styleUrls: ['./registar.component.css']
})
export class RegistarComponent implements OnInit {
  verify:boolean;
  checked: boolean;
  pass2: string;

  registerUserData = {firstName: '', lastName: '', email: '', password: ''};

  constructor(
    private user: UserService,
    private _auth: AauthService,
    private connect: ConectionService,
    private facebook: FacebookConnectionService,
  ) { }

  ngOnInit() {
    this.connect.connectionVerify = false;
      this.checked = false;

  }

  sub(){
    debugger
    this.user.errChecked = true;
    this.user.checked = false;
    if(this.connect.connectionVerify == true){
      this.user.checked = true;
    }else{this.user.errChecked = false; return;}

    this.user.sub(this.registerUserData.firstName, this.registerUserData.lastName, this.registerUserData.email, this.registerUserData.password, this.pass2);

   
    if(!this.user.errEmail && !this.user.errFName && !this.user.errLName && !this.user.errPass1 && !this.user.errPassMatch){
      
    this.registerUserData;
    
      if(this.user.tempAcc.getShape().getSkinColor() != undefined){
    this._auth.registerUser(this.registerUserData)
    .subscribe(
      res => {
        console.log(res)
        if(res.success){
        localStorage.setItem('token', res.data.token)
        localStorage.setItem('refreshtoken', res.data.refreshtoken)
        this.user.sub(this.registerUserData.firstName, this.registerUserData.lastName, this.registerUserData.email, this.registerUserData.password, this.pass2);
        }

      },
      err => console.log(err)
    )
    }
    }


  }


  facebookLogin(){
    this.facebook.facebookLogin();
  }

}
