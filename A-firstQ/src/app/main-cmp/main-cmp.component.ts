import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../services.service';
import { worker } from '../classes';

@Component({
  selector: 'app-main-cmp',
  templateUrl: './main-cmp.component.html',
  styleUrls: ['./main-cmp.component.css']
})
export class MainCmpComponent implements OnInit {
  login:boolean;
  myID:string;
  stock:boolean;

  selectID:string;
  selectFN:string;
  selectLisence:string;
  needForklift:string[]=new Array;

  constructor(private serv:ServicesService) { }

  ngOnInit() {
    this.serv.manager=false;
    this.serv.signed=false;
    this.serv.mainP=true;
    this.login=false;
    this.stock=false;
    this.myID='';
    this.serv.arrProducts();
  }

  sign(){
    this.serv.signed=true;
    this.serv.mainP=false;
  }

  log(){
    this.serv.mainP=false;
    this.login=true;

  }

  Enter(){

    if(this.myID=='99999'){
      debugger;
      this.serv.manager=true;
      this.login=false;
      return true;
    }

    for(var i=0; i<this.serv.arrMyProducts.length; i++){     
      if(this.serv.arrMyProducts[i].getForkliftNeed()==true){
        this.needForklift.push('yes');
      }
      else{
        this.needForklift.push('no');
      }
    }

    for(var i=0; i<this.serv.worker1.length; i++){
      if(this.myID!=this.serv.worker1[i].getID() || this.myID==''){
        alert('no such worker');
      }

      else{
        this.serv.worker1[i].setVisits();
        this.serv.worker2.push(new worker(this.serv.worker1[i].getID(), this.serv.worker1[i].getFullName(), this.serv.worker1[i].getForklift()));
        this.selectFN=this.serv.worker1[i].getFullName();
        this.selectID=this.serv.worker1[i].getID();
        if(this.serv.worker1[i].getForklift()==true){
        this.selectLisence = 'yes';
        }
        else{
          this.selectLisence = 'no';
        }
        this.stock=true;
        this.login=false;
        return true;
      }
    }
    alert('no such worker');


  }

  takeOf(n){
    //debugger;
    var temp=0;
    this.serv.tempArrProducts.push(n);

    if(this.serv.tempArrProducts[this.serv.tempArrProducts.length-1].getForkliftNeed()==true&&this.selectLisence == 'no'){
      alert('need forklift lisence');
    }
    else{
    for(var i=0; i<this.serv.arrMyProducts.length; i++){
      if(this.serv.tempArrProducts[this.serv.tempArrProducts.length-1].getIDP()==this.serv.arrMyProducts[i].getIDP()){
        break;
      }
      else{
      temp++;
      }
    }
    this.serv.arrMyProducts[temp].setInPlace();
    for(var i=0; i<this.serv.worker1.length; i++){
      if(this.serv.worker1[i].getID()==this.myID && this.serv.arrMyProducts[temp].getInPlace()==true){
    this.serv.worker1[i].setNumberOP();
      }
    }
  }
  }

  logOut(){
    this.serv.mainP=true;
    this.stock=false;
    this.serv.manager=false;
  }

}
