import { Injectable } from '@angular/core';
import { UserService } from './user.service';
import { ConectionService } from './connection.service';
import { AauthService } from './auth.service';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StyleSellectService {
  dressType:string[];
  errHeight:boolean;
  errChest:boolean;
  errWaist:boolean;
  errHips:boolean;

  errApproximateStyle1:boolean;
  errApproximateStyle2:boolean;

  connected:boolean;

  precise:boolean; //size option

  forms = {chest: '', waist: '', hips: '', height: '', skin: ''};
  approximateForms = {height: '', skin: '', style1: '', style2: ''};

  formsFriend = {chest: '', waist: '', hips: '', height: '', skin: ''};
  approximateFormsFriend = {height: '', skin: '', style1: '', style2: ''};

  mySize = {height: '', chest: '', waist: '', hips: ''};

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
    
    this.errApproximateStyle1 = false;
    this.errApproximateStyle2 = false;

    this.connected = true;
  }


  pushIn(newStyle){
    for(let i=0; i < this.dressType.length; i++){
      if(newStyle == this.dressType[i]){
        let temp = this.dressType[i];
        this.dressType[i] = this.dressType[this.dressType.length-1];
        this.dressType.pop();
        return;
      }
    }
    this.dressType.push(newStyle);
  }



  collectStyle(){
    if(this.dressType.length<3){
      alert('Select at least 3 styles');
    }
    else{
      this.user.tempAcc.setStyle(this.dressType);
      if(this.forms.chest != ''){
        this.conect.pageMove('clothVar');
      }else{
        this.conect.pageMove('measurment');
      }
    }
  }

  /*body proportion*/ 

  myApproximateShape(newStyle1, newStyle2, newHeight, newskin){
    if(newHeight < 136 || newHeight > 220){
      this.errHeight = true;
    }else{
      this.errHeight = false;
    }

    if(this.errHeight == false){
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

  myShape(newCheast, newHeight, newWaist, newThigh, newskin){
    if(newCheast < 55 || newCheast >140){
      this.errChest = true;
    }else{
      this.errChest = false;
    }

    if(newHeight < 136 || newHeight > 220){
      this.errHeight = true;
    }else{
      this.errHeight = false;
    }

    if(newWaist < 37 || newWaist > 130){
      this.errWaist = true;
    }else{
      this.errWaist = false;
    }

    if(newThigh < 66 || newThigh > 155){
      this.errHips = true;
    }else{
      this.errHips = false;
    }

    if(this.errChest == false && this.errHeight == false && this.errHips == false && this.errWaist ==false){
    this.user.tempAcc.getShape().setCheast(newCheast);
    this.user.tempAcc.getShape().setHeight(newHeight);
    this.user.tempAcc.getShape().setWeist(newWaist);
    this.user.tempAcc.getShape().setThigh(newThigh);
    this.user.tempAcc.getShape().setSkinColor(newskin);

    this.mySize.chest = newCheast;
    this.mySize.height = newHeight;
    this.mySize.hips = newThigh;
    this.mySize.waist = newWaist;

    var tempSize = JSON.stringify(this.mySize);
    localStorage.setItem('my-shape', tempSize);

    let headers = new HttpHeaders({
      'token': localStorage.token
    });
    let options = {
      headers: headers
    }
    
      this._auth.sizeDimension({dimensions: tempSize}, options)
      .subscribe(
        res => {
          console.log(res)
          if (res["success"]){
            localStorage.setItem('myProfile', tempSize);
          } 
        },
        err => console.log(err)
      )
  
    
    }
  }


}
