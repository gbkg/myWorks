import { Component, OnInit } from '@angular/core';
import { UserService }from '../../user.service';
import { ConectionService } from '../../connection.service';
import { StyleSellectService } from '../../style-select.service';

@Component({
  selector: 'app-friend-precise-size',
  templateUrl: './friend-precise-size.component.html',
  styleUrls: ['./friend-precise-size.component.css']
})
export class FriendPreciseSizeComponent implements OnInit {

  constructor(
    private user: UserService,
    private connect: ConectionService,
    private style: StyleSellectService,
  ) { }

  ngOnInit() {
  }

  approximate(){
    this.style.precise = false;
    this.connect.friendPreciseStyle = false;
    localStorage.setItem('preciseStyle', JSON.stringify(this.connect.friendPreciseStyle));
  }

  save(){
    this.style.enterFriendStyle();
  }

}
