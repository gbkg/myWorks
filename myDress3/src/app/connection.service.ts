import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ConectionService {
  friendSelect: boolean;
  friendPreciseStyle: boolean;
  explanation:boolean;
  addedItem: boolean;

  connectionVerify: boolean;

  constructor(
    private router: Router,
    private cookie: CookieService,
    private http: HttpClient,
  ) {
    this.explanation = false;
    this.addedItem = false;
    this.friendPreciseStyle = true;

    this.connectionVerify = false;
  }


  pageMove(adress) {
    this.router.navigate(['/', adress]);
  }

  getCoockie(): string {
    return this.cookie.get('Email');
  }

  selectForFriend() {
    if (localStorage.getItem('friendSelect') == 'true') {
      this.friendSelect = true;
    } else {
      this.friendSelect = false;
    }
  }

}
