import { Component, OnInit } from '@angular/core';
import { UserService }from '../user.service';
import { ConectionService } from '../connection.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  fbPic:string;
  explain:boolean;

  clicked:boolean; //fb pictures menu

  constructor(
    private user: UserService,
    private connect: ConectionService,
  ) { }

  ngOnInit() {
    this.fbPic='';
    this.user.restoreAcc();
    if(this.user.fbLoged == true){
      this.fbPic = localStorage.getItem('pic');
    }

    this.clicked = false;

    this.explain = false;

    if(localStorage.getItem('email')){
      this.user.fbLoged = true;
    }


  }

  popUp(){
    this.connect.explanation = true;
  }

  Logout(){
    this.user.Logout();
  }

  check(){
    this.clicked = !this.clicked;
  }

}
