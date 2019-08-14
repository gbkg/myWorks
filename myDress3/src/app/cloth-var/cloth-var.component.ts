import { Component, OnInit } from '@angular/core';
import { UserService }from '../user.service';
import { ConectionService } from '../connection.service';
import { StyleSellectService } from '../style-select.service';

@Component({
  selector: 'app-cloth-var',
  templateUrl: './cloth-var.component.html',
  styleUrls: ['./cloth-var.component.css']
})
export class ClothVarComponent implements OnInit {

  friendSelect:string;
  fullField: boolean;



  constructor(
    private user: UserService,
    private connect: ConectionService,
    private style: StyleSellectService,
  ) {}

  ngOnInit() {
    if(localStorage.getItem('preciseStyle')){
    this.connect.friendPreciseStyle = JSON.parse(localStorage.getItem('preciseStyle'));
    this.style.restoreStyle();
    }
    this.style.precise = true;

    if(localStorage.getItem('friendSelect') != null){
    this.friendSelect = localStorage.getItem('friendSelect');
    }else{
      this.friendSelect = "false";
    }
    localStorage.setItem('selectedItemBarcode', '');

    this.connect.selectForFriend();

  }

  filsterStat(){
    this.user.filter = !this.user.filter;
  }

  close(){
    this.connect.explanation = false;
  }

  select(event){
    const newVal = event.target.value;
    localStorage.setItem('friendSelect', newVal);

    this.connect.selectForFriend();
    
  }

  save(){
    if((this.style.formsFriend.chest =='' || this.style.formsFriend.height == '' || this.style.formsFriend.hips == '' || this.style.formsFriend.skin == '' || this.style.formsFriend.waist == '') && this.style.precise){
      this.fullField = false;
    }
      if(this.style.precise){
    this.style.myShape(this.style.formsFriend.chest, this.style.formsFriend.height, this.style.formsFriend.waist, this.style.formsFriend.hips, this.style.formsFriend.skin);

    if((this.style.errChest == false && this.style.errHeight == false && this.style.errHips == false && this.style.errWaist == false) || (this.style.errHeight == false && this.style.approximateForms.style1 != '' && this.style.approximateForms.style1 != '')){
    this.style.formsFriend.chest = ''; this.style.formsFriend.height = ''; this.style.formsFriend.hips = ''; this.style.formsFriend.skin = ''; this.style.formsFriend.waist = '';
    }

    }
  }

}
