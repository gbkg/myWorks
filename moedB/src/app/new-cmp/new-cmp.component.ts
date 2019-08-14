import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../services.service';
import { exchangeList } from '../classes';

@Component({
  selector: 'app-new-cmp',
  templateUrl: './new-cmp.component.html',
  styleUrls: ['./new-cmp.component.css']
})
export class NewCmpComponent implements OnInit {

  mount:number;
  typeFrom:string;
  typeTo:string;
  from:number;
  to:number;
  myExchange:number;

  count:number;
  fromTo:string;
  fromTo2:string;

  view:boolean;
  isValid:boolean;
  flag:boolean;

  constructor(private serv:ServicesService) { }

  ngOnInit() {
    this.serv.myCoins();
    this.mount=null;
    this.count=0;

    this.view=false;
    this.fromTo2='';
    this.isValid=false;
    this.typeFrom='';
    this.typeTo='';

  }

  start(){
    if(this.mount!=null && this.typeFrom!='' && this.typeTo!=''){
      this.count++;
      for(let i=0; i<this.serv.arrCoins.length; i++){
        
        if(this.typeFrom==this.serv.arrCoins[i].getKind()){
          this.fromTo='from '+this.serv.arrCoins[i].getKind();
          this.from=this.serv.arrCoins[i].gerValue();
        }

        if(this.typeTo==this.serv.arrCoins[i].getKind()){
          this.fromTo2=' to '+this.serv.arrCoins[i].getKind();
          this.to=this.serv.arrCoins[i].gerValue();
          
        }
        this.myExchange=this.to*this.mount;
        this.fromTo+=this.fromTo2;
      }
      this.serv.arrExList.push(new exchangeList(this.count, this.fromTo, this.mount, this.myExchange));

      

      alert('the exchange is: ' + this.myExchange);
      this.mount=null;
    }
  }


  listView(){
    this.view =! this.view;
  }

  upd(){
    debugger;
    for(let i=this.serv.arrCoins.length-1; i>-1; i--){
      if(this.serv.arrCoins.length>this.serv.arrCoinsLength){
          this.serv.arrCoins.pop();
    }
    }
  }

}
