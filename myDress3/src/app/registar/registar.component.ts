import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { AauthService } from '../auth.service';
import { ConectionService } from '../connection.service';
import { CheckboxControlValueAccessor, CheckboxRequiredValidator } from '@angular/forms';

@Component({
  selector: 'app-registar',
  templateUrl: './registar.component.html',
  styleUrls: ['./registar.component.css']
})
export class RegistarComponent implements OnInit {
  verify:boolean;
  checked: boolean;
  pass2: string;

  registerUserData = {FirstName: '', LastName: '', email: '', password: ''};

  constructor(
    private user: UserService,
    private _auth: AauthService,
    private connect: ConectionService,
  ) { }

  ngOnInit() {
      this.verify = false;
      this.checked = false;

  }

  sub(){
    this.user.errChecked = true;
    this.user.checked = false;
    if(this.verify == true){
      this.user.checked = true;
    }else{this.user.errChecked = false; return;}

    this.user.sub(this.registerUserData.FirstName, this.registerUserData.LastName, this.registerUserData.email, this.registerUserData.password, this.pass2);

   
    if(!this.user.errEmail && !this.user.errFName && !this.user.errLName && !this.user.errPass1 && !this.user.errPassMatch){
      
    this.registerUserData;
    

    this._auth.registerUser(this.registerUserData)
    .subscribe(
      res => {
        console.log(res)
        if(res.success){
        localStorage.setItem('token', res.data.token)
        localStorage.setItem('refreshtoken', res.data.refreshtoken)
        this.user.sub(this.registerUserData.FirstName, this.registerUserData.LastName, this.registerUserData.email, this.registerUserData.password, this.pass2);
        }

      },
      err => console.log(err)
    )
    }


  }

}
