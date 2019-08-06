import { Component, OnInit } from '@angular/core';
import { UserService }from '../user.service';

@Component({
  selector: 'app-my-style',
  templateUrl: './my-style.component.html',
  styleUrls: ['./my-style.component.css']
})
export class MyStyleComponent implements OnInit {
  Breast:string;
  Waist:string;
  Thigh:string;
  Height:string;

  fbPic:string;

  oldPass:string;
  replacePass:boolean;
  newPass:string;
  wrongPss:boolean;

  constructor(
    private user: UserService,
  ) { }

  ngOnInit() {
    this.Height = '1';
    this.Breast = '1';
    this.Waist = '1';
    this.Thigh = '1';

    this.oldPass = '';
    this.replacePass = true;
    this.wrongPss = false;

    this.user.restoreAcc();
    this.fbPic='';
    if(this.user.fbLoged == true){
      this.fbPic = localStorage.getItem('pic');
    }
  }


  sub(){
    if(this.Height != '1'){
      this.user.tempAcc.getShape().setHeight(this.Height);
    }
    if(this.Breast != '1'){
      this.user.tempAcc.getShape().setCheast(this.Breast);
    }
    if(this.Waist != '1'){
      this.user.tempAcc.getShape().setWeist(this.Waist);
    }
    if(this.Thigh != '1'){
      this.user.tempAcc.getShape().setThigh(this.Thigh);
    }
    if(this.newPass != ''){
      this.user.tempAcc.setPass(this.newPass);
    }
  }

  checkPass(){
    if(this.oldPass == this.user.tempAcc.getPass()){
      this.replacePass = false;
      this.wrongPss = false;
    }else{
      this.wrongPss = true;
    }
  }

}
