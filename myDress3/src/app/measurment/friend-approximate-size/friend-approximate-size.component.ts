import { Component, OnInit } from '@angular/core';
import { StyleSellectService } from '../../style-select.service';
import { ConectionService } from '../../connection.service';

@Component({
  selector: 'app-friend-approximate-size',
  templateUrl: './friend-approximate-size.component.html',
  styleUrls: ['./friend-approximate-size.component.css']
})
export class FriendApproximateSizeComponent implements OnInit {

  constructor(
    private style: StyleSellectService,
    private connect: ConectionService,
  ) { }

  ngOnInit() {
  }

  approximate(){
    this.style.precise = true;
    this.connect.friendPreciseStyle = true;
    localStorage.setItem('preciseStyle', JSON.stringify(this.connect.friendPreciseStyle));
  }

  save(){
    this.style.enterFriendStyle();
  }

}
