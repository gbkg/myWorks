import { Component, OnInit } from '@angular/core';
import { ConectionService } from '../connection.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-front-page',
  templateUrl: './front-page.component.html',
  styleUrls: ['./front-page.component.css']
})
export class FrontPageComponent implements OnInit {
  loadingP:boolean;

  constructor(
    private conect: ConectionService,
    private user: UserService,
  ) { }

  ngOnInit() {
    this.user.restoreAcc();
    this.loadingP = false;

    localStorage.setItem('selectedItemBarcode', '');
  }


  showMeStyle(){
    this.loadingP = true;
    setTimeout(() => { this.loadP(); }, 2000);
  }


  loadP(){
    if(localStorage.getItem('email')){
      this.conect.pageMove('clothVar');
    }else{      
      this.conect.pageMove('enterence');
    }
  }

}
