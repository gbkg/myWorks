import { Injectable } from '@angular/core';
import { UserService } from './user.service';
import { ConectionService } from './connection.service';
import { AauthService } from './auth.service';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StyleSellectService {
  dressType: string[];
  errHeight: boolean;
  errChest: boolean;
  errWaist: boolean;
  errHips: boolean;
  errSkin:boolean;

  errApproximateStyle1: boolean;
  errApproximateStyle2: boolean;

  fullField: boolean;

  connected: boolean;

  precise: boolean; //size option
  updateFlag: boolean;
  successFlag: boolean;

  forms = { chest: '', waist: '', hips: '', height: '', skin: '' };
  approximateForms = { height: '', skin: '', style1: '', style2: '' };

  formsFriend = { chest: '', waist: '', hips: '', height: '', skin: '' };
  approximateFormsFriend = { height: '', skin: '', style1: '', style2: '' };

  mySize= { height: '', chest: '', waist: '', hips: '', skin: ''};
  myDetail = { firstName: '', lastName: '', email: '', password: '', measurements: '' };

  constructor(
    private user: UserService,
    private conect: ConectionService,
    private _auth: AauthService,
  ) {
    this.dressType = [];
    this.errHeight = false;
    this.errChest = false;
    this.errWaist = false;
    this.errHips = false;
    this.errSkin = false;

    this.errApproximateStyle1 = false;
    this.errApproximateStyle2 = false;

    this.connected = true;

    this.fullField = true;

    this.updateFlag = false;
    this.successFlag = false;
  }

  enterMyStyle() {

    if(!this.precise){
      this.errApproximateStyle1 = false;
      this.errApproximateStyle2 = false;

      if(this.approximateForms.style1 == ''){
        this.errApproximateStyle1 = true;
      }
      
      if(this.approximateForms.style2 == ''){
        this.errApproximateStyle2 = true;
      }

      this.myApproximateShape(this.approximateForms.style1, this.approximateForms.style2, this.forms.height, this.forms.skin);
      this.forms = {chest: '', waist: '', hips: '', height: this.forms.height, skin: this.forms.skin};
      if(this.errApproximateStyle1 == false && this.errApproximateStyle2 == false && this.errHeight == false && this.forms.skin){
        /*
        if(localStorage.getItem('email' ) && !this.updateFlag && this.successFlag){
          this.conect.pageMove('clothVar');
        }else{
          this.connected = false;
        }*/
      }
    }else{

      this.myShape(this.forms.chest, this.forms.height, this.forms.waist, this.forms.hips, this.forms.skin);
      this.approximateForms = {height: '', skin: '', style1: '', style2: ''};
      if(this.errChest == false && this.errHeight == false && this.errHips == false && this.errWaist == false && !this.updateFlag){
        this.forms.chest = ''; this.forms.height = ''; this.forms.hips = ''; this.forms.skin = ''; this.forms.waist = '';
         /* if(localStorage.getItem('email') && !this.updateFlag){
        this.conect.pageMove('clothVar')
          }else{
            this.connected = false;
          }*/
        }
    }



  }

  enterFriendStyle(){
    if(this.precise){
      this.checkErrShape(this.formsFriend.chest, this.formsFriend.height, this.formsFriend.waist, this.formsFriend.hips, this.formsFriend.skin, '', '');
      if(this.errChest == false && this.errHeight == false && this.errHips == false && this.errWaist == false && this.formsFriend.skin != ''){
        let tempShape = JSON.stringify(this.formsFriend);
        localStorage.setItem('friemd-shape', tempShape);
        this.user.tempAcc.setFriendShape(this.formsFriend.chest, this.formsFriend.height, this.formsFriend.skin, this.formsFriend.hips, this.formsFriend.waist);
        this.approximateFormsFriend = {height: '', skin: '', style1: '', style2: ''};
      }
    }else{
      this.checkErrShape('', this.approximateFormsFriend.height, '', '', this.approximateFormsFriend.skin, this.approximateFormsFriend.style1, this.approximateFormsFriend.style2);
      if(!this.errApproximateStyle1 && !this.errApproximateStyle2 && !this.errHeight && !this.errSkin){
        let tempShape = JSON.stringify(this.approximateFormsFriend);
        localStorage.setItem('friemd-shape', tempShape);
        this.user.tempAcc.setFriendApproximateShape(this.approximateFormsFriend.height, this.approximateFormsFriend.skin, this.approximateFormsFriend.style1, this.approximateFormsFriend.style2);
        this.formsFriend = {height: '', skin: '', chest: '', hips: '', waist: ''};
      }
    }
  }


  pushIn(newStyle) {
    for (let i = 0; i < this.dressType.length; i++) {
      if (newStyle == this.dressType[i]) {
        let temp = this.dressType[i];
        this.dressType[i] = this.dressType[this.dressType.length - 1];
        this.dressType.pop();
        return;
      }
    }
    this.dressType.push(newStyle);
  }



  collectStyle() {
    if (this.dressType.length < 3) {
      alert('Select at least 3 styles');
    }
    else {
      this.user.tempAcc.setStyle(this.dressType);
      if (this.forms.chest != '') {
        this.conect.pageMove('clothVar');
      } else {
        this.conect.pageMove('measurment');
      }
    }
  }

  /*body proportion*/

  myApproximateShape(newStyle1, newStyle2, newHeight, newskin) {
    if (newHeight < 136 || newHeight > 220) {
      this.errHeight = true;
    } else {
      this.errHeight = false;
    }

    if (this.errHeight == false) {
      this.user.tempAcc.getApproximateShape().setHeight(newHeight);
      this.user.tempAcc.getApproximateShape().setSkinColor(newskin);
      this.user.tempAcc.getApproximateShape().setStyle1(newStyle1);
      this.user.tempAcc.getApproximateShape().setStyle2(newStyle2);

      this.approximateForms.height = this.forms.height;
      this.approximateForms.skin = this.forms.skin;
      let tempSize = JSON.stringify(this.approximateForms);

      localStorage.setItem('my-shape', tempSize);
    }

  }

  checkErrShape(newCheast, newHeight, newWaist, newThigh, newskin, style1, style2){

    if ((newHeight < 136 || newHeight > 220) && (newHeight != 'נמוך' || newHeight != 'ממוצע' || newHeight != 'גבוה')) {
      this.errHeight = true;
    } else {
      this.errHeight = false;
    }

    if(newskin == ''){
      this.errSkin = true;
    }else{
      this.errSkin = false;
    }

    if(this.precise){

    if (newCheast < 55 || newCheast > 140) {
      this.errChest = true;
    } else {
      this.errChest = false;
    }

    if (newWaist < 37 || newWaist > 130) {
      this.errWaist = true;
    } else {
      this.errWaist = false;
    }

    if (newThigh < 66 || newThigh > 155) {
      this.errHips = true;
    } else {
      this.errHips = false;
    }

  }else{
    this.errApproximateStyle1 = false;
    this.errApproximateStyle2 = false;

    if(style1 == ''){
      this.errApproximateStyle1 = true;
    }
    
    if(style2 == ''){
      this.errApproximateStyle2 = true;
    }


  }


  }

  myShape(newCheast, newHeight, newWaist, newThigh, newskin) {

    this.checkErrShape(newCheast, newHeight, newWaist, newThigh, newskin, '', '');

    if (this.errChest == false && this.errHeight == false && this.errHips == false && this.errWaist == false) {
      this.user.tempAcc.getShape().setCheast(newCheast);
      this.user.tempAcc.getShape().setHeight(newHeight);
      this.user.tempAcc.getShape().setWeist(newWaist);
      this.user.tempAcc.getShape().setThigh(newThigh);
      this.user.tempAcc.getShape().setSkinColor(newskin);

      this.mySize.chest = newCheast;
      this.mySize.height = newHeight;
      this.mySize.hips = newThigh;
      this.mySize.waist = newWaist;
      this.mySize.skin = newskin;
      this.myDetail.firstName = this.user.tempAcc.getFName();
      this.myDetail.lastName = this.user.tempAcc.getLName();
      this.myDetail.password = this.user.tempAcc.getPass();
      this.myDetail.email = this.user.tempAcc.getEmail();

      var tempSize = JSON.stringify(this.mySize);
      this.myDetail.measurements = tempSize;
      localStorage.setItem('my-shape', tempSize);
      

      let headers = new HttpHeaders({
        'token': localStorage.token
      });
      let options = {
        headers: headers
      }

      this._auth.registerUser(this.myDetail)
        .subscribe(
          res => {
            console.log(res)
            if (res.success) {
              localStorage.setItem('my-shape', tempSize);
              this.successFlag = true;
              this.conect.pageMove('clothVar');
            }
          },
          err => console.log(err)
        )


    }
  }

  restoreStyle(){
    let tempStyle = JSON.parse(localStorage.getItem('my-shape'));
    if(tempStyle.style1){
      this.approximateForms = tempStyle;    
      this.user.tempAcc.setApproximateShape(this.approximateForms.height, this.approximateForms.skin, this.approximateForms.style1, this.approximateForms.style2);
      this.forms.height = this.approximateForms.height;
      this.forms.skin = this.approximateForms.skin;
    }else{
      this.forms = tempStyle;
      this.user.tempAcc.setShape(this.forms.chest, this.forms.height, this.forms.skin, this.forms.hips, this.forms.waist);
    }

    if(localStorage.getItem('friemd-shape')){
      let tempFriendStyle = JSON.parse(localStorage.getItem('friemd-shape'));
      if(tempFriendStyle.style1){
        this.approximateFormsFriend = tempFriendStyle;
        this.user.tempAcc.setFriendApproximateShape(this.approximateFormsFriend.height, this.approximateFormsFriend.skin, this.approximateFormsFriend.style1, this.approximateFormsFriend.style2);
      }else{
        this.formsFriend = tempFriendStyle;
        this.user.tempAcc.setFriendShape(this.formsFriend.chest, this.formsFriend.height, this.formsFriend.skin, this.formsFriend.hips, this.formsFriend.waist);
      }
    }

  }


}
