import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';
import { Person } from '../classes';

@Component({
  selector: 'app-new-cmp',
  templateUrl: './new-cmp.component.html',
  styleUrls: ['./new-cmp.component.css']
})
export class NewCmpComponent implements OnInit {

  inputValue:string;
  menu:boolean;
  game:boolean;
  counter:number; //card
  myCrd:number;
  opCard:number;
  comp:number;
  player:number;
  score:boolean;
  games:number;
  wins:number;
  losts:number;

  constructor(private data:DataService) {
  }

  ngOnInit() {
    this.data.createCards();
    this.inputValue="";
    this.menu = true;
    this.game = false;
    this.counter = 0;
    this.comp = 0;
    this.player = 0;
    this.score = false;
    this.games = 0;
    this.wins = 0;
    this.losts = 0;
  }

  start():boolean{
    if(this.inputValue==""){
      alert("you must enter your name");
      return false;
    }
    debugger;
    
    this.menu = false;
    this.game = true;
    this.score = false;

    this.data.account = new Person(this.inputValue);
    let random;
     
    for(let i=0;i<26;i++){
    random =Math.floor(Math.random() * ((this.data.cards.length) - 0)) + 0;   
    this.data.account.addCard(this.data.cards[random]);
    this.data.cards[random] = this.data.cards[this.data.cards.length-1]; 
    this.data.cards.pop();

    }

    this.myCrd  = this.data.cards[this.counter].getValue();
    this.opCard = this.data.account.getCards()[this.counter].getValue();

    if(this.myCrd > this.opCard){
      this.player++;
    }
    else{
      this.comp++;
    }



   // var random =Math.floor(Math.random() * (1 + max - min)) + min;
  }

  nextCard(){
    debugger;
    if(this.counter<25){
    this.counter++;
    }
    
    this.myCrd  = this.data.cards[this.counter].getValue();
    this.opCard = this.data.account.getCards()[this.counter].getValue();


    if(this.myCrd > this.opCard){
      this.player++;
    }
    else{
      this.comp++;
    }

    if(this.games > 24){
      if(this.player>this.comp){
        this.wins++;
      }
      else{
        this.losts++;
      }
      this.score = true;
      this.game  = false;
    }

    this.games++;

    
  }


  newGame(){
    debugger;
    //this.score = false;
    //this.game  = true;
    this.games = 0;
    this.counter = 0;
    this.comp = 0;
    this.player = 0;
    this.data.cards = [];
    this.data.createCards();

    this.start();
  }

}
