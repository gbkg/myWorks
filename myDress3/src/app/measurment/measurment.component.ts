import { Component, OnInit } from '@angular/core';
import { ConectionService } from '../connection.service';
import { HttpClient } from '@angular/common/http';
import { StyleSellectService } from '../style-select.service';

@Component({
  selector: 'app-measurment',
  templateUrl: './measurment.component.html',
  styleUrls: ['./measurment.component.css']
})
export class MeasurmentComponent implements OnInit {
  
  fullField:boolean;

  precise:boolean;


  constructor(
    private conect: ConectionService,
    private http: HttpClient,
    private style: StyleSellectService,
  ) { }

  ngOnInit() {
    this.fullField = true;
    this.style.precise = true;
  }

  change(value){
    this.conect.pageMove(value);
  }

  save(){
    this.style.errApproximateStyle1 = false;
    this.style.errApproximateStyle2 = false;

    if(!this.style.precise){
      if(this.style.approximateForms.style1 == ''){
        this.style.errApproximateStyle1 = true;
      }
      
      if(this.style.approximateForms.style2 == ''){
        this.style.errApproximateStyle2 = true;
      }

      if(this.style.errApproximateStyle1 == false && this.style.errApproximateStyle2 == false){
        this.style.myApproximateShape(this.style.approximateForms.style1, this.style.approximateForms.style2, this.style.forms.height, this.style.forms.skin);
        if(localStorage.getItem('email')){
          this.conect.pageMove('clothVar');
        }else{
          this.style.connected = false;
        }
      }
    }

    if((this.style.forms.chest =='' || this.style.forms.height == '' || this.style.forms.hips == '' || this.style.forms.skin == '' || this.style.forms.waist == '') && this.style.precise){
      this.fullField = false;
    }
      if(this.style.precise){
    this.style.myShape(this.style.forms.chest, this.style.forms.height, this.style.forms.waist, this.style.forms.hips, this.style.forms.skin);

    if((this.style.errChest == false && this.style.errHeight == false && this.style.errHips == false && this.style.errWaist == false) || (this.style.errHeight == false && this.style.approximateForms.style1 != '' && this.style.approximateForms.style1 != '')){
    this.style.forms.chest = ''; this.style.forms.height = ''; this.style.forms.hips = ''; this.style.forms.skin = ''; this.style.forms.waist = '';

      if(localStorage.getItem('email')){
    this.conect.pageMove('clothVar')
      }else{
        this.style.connected = false;
      }
    }
    }
  }


}
