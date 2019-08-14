import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../services.service';
import { worker, product } from '../classes';

@Component({
  selector: 'app-sign-in-cmp',
  templateUrl: './sign-in-cmp.component.html',
  styleUrls: ['./sign-in-cmp.component.css']
})
export class SignInCmpComponent implements OnInit {

  IDWorker:string;
  FN:string;

  errID:boolean;
  errFN:boolean;
  errTL:boolean;

  newWorker:boolean;
  Tlisence:string;
  lisence:boolean;

  constructor(private serv:ServicesService) { }

  ngOnInit() {
    this.errID=false;
    this.errFN=false;
    this.errTL=false;

    this.IDWorker='';
    this.FN='';

    this.newWorker=true;
  }

  create(){
    this.newWorker=true;
    if(this.IDWorker.length != 5 || this.IDWorker==""){
      this.errID=true;
      this.newWorker=false;
    }

    if(this.FN.length<4 || this.FN==""){
      this.errFN=true;
      this.newWorker=false;
    }

    for(var i=0; i<this.FN.length; i++){
      if(this.FN[i]=="" && this.FN.length<5){
        this.errFN=true;
        this.newWorker=false;
      }
    }

    if(this.Tlisence=='yes'){
      this.lisence=true;
    }
    else if(this.Tlisence=='no'){
      this.lisence=false;
    }
    else{
      this.errTL=true;
      this.newWorker=false;
    }

    for(var i=0; i<this.serv.worker1.length;i++){
      if(this.serv.worker1[i].getID()==this.IDWorker){
        alert('account axist');
        this.newWorker=false;
      }
    }


    if(this.newWorker==true){
      this.serv.worker1.push(new worker(this.IDWorker, this.FN, this.lisence));
      this.IDWorker='';
      this.FN='';
      this.Tlisence='';
    this.serv.signed=false;
    this.serv.mainP=true;
    }
  }

}
