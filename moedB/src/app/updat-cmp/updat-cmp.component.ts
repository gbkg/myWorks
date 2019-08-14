import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../services.service';
import { coin } from '../classes';

@Component({
  selector: 'app-updat-cmp',
  templateUrl: './updat-cmp.component.html',
  styleUrls: ['./updat-cmp.component.css']
})
export class UpdatCmpComponent implements OnInit {

  type:string;
  value:number;
  temp:coin[];
  flag:boolean;
  flag2:boolean;

  constructor(private serv:ServicesService) { }

  ngOnInit() {
    this.serv.myCoins();
    this.flag=false;
    this.flag2=true;
  }


  updateNewV(){
    this.flag=false;
    for(let i=0; i<this.serv.arrCoins.length; i++){
      if(this.type==this.serv.arrCoins[i].getKind()){
        this.serv.arrCoins[i].setValue(this.value);
        this.flag=true;
      }

    }
    debugger;
    if(this.flag==false){
      this.serv.arrCoins.unshift(new coin(this.type, this.value));
      this.serv.arrCoinsLength++;
      }

  }

}
