import { Component, OnInit } from '@angular/core';
import { StyleSellectService } from '../style-select.service';
import { ConectionService } from '../connection.service';

@Component({
  selector: 'app-style-select',
  templateUrl: './style-select.component.html',
  styleUrls: ['./style-select.component.css']
})
export class StyleSelectComponent implements OnInit {

  constructor(
    private style: StyleSellectService,
    private conect: ConectionService,
  ) { }

  ngOnInit() {
  }

  pushIn(newStyle){
    this.style.pushIn(newStyle);
  }

  collectStyle(){
    debugger
    this.style.collectStyle();
  }

  skip(){
    if(this.style.forms.chest != ''){
      this.conect.pageMove('clothVar');
    }else{
      this.conect.pageMove('measurment');
    }
  }

}
