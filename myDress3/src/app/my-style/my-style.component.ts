import { Component, OnInit } from '@angular/core';
import { UserService }from '../user.service';
import { StyleSellectService } from '../style-select.service';

@Component({
  selector: 'app-my-style',
  templateUrl: './my-style.component.html',
  styleUrls: ['./my-style.component.css']
})
export class MyStyleComponent implements OnInit {

  oldPass:string;
  replacePass:boolean;
  newPass:string;
  wrongPss:boolean;

  constructor(
    private user: UserService,
    private style: StyleSellectService,
  ) { }

  ngOnInit() {
    this.user.tempAcc
    this.style.forms.waist = '';
    this.style.forms.hips = '';
    this.style.forms.chest = '';
    this.style.approximateForms.style1 = '';
    this.style.approximateForms.style2 = '';

    this.style.restoreStyle();

    this.oldPass = '';
    this.replacePass = true;
    this.wrongPss = false;

    this.user.restoreAcc();

    if(localStorage.getItem('email')){
      this.user.fbLoged = true;
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

  sub(){
    this.style.updateFlag = true;
    this.style.enterMyStyle();
  }

}
