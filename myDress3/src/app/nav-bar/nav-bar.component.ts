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
    }else{
      this.fbPic = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMScfxPLAWx-25DKqRhzg6C_-YaYI5I37Qv--Mh_GuC12XFFWR';
    }

    this.clicked = false;

    this.explain = false;


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
