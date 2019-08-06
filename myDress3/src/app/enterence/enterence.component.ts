import { Component, OnInit } from '@angular/core';
import { UserService }from '../user.service';

@Component({
  selector: 'app-enterence',
  templateUrl: './enterence.component.html',
  styleUrls: ['./enterence.component.css']
})
export class EnterenceComponent implements OnInit {

  constructor(
        private user: UserService,
        ) { }

  ngOnInit() {
    this.user.restoreAcc();
  }

  Logout(){
    this.user.loged = false;
    localStorage.clear();
  }

}
