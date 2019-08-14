import { Component, OnInit } from '@angular/core';
import { StyleSellectService } from '../style-select.service';

@Component({
  selector: 'app-size-option',
  templateUrl: './size-option.component.html',
  styleUrls: ['./size-option.component.css']
})
export class SizeOptionComponent implements OnInit {

  constructor(
    private style: StyleSellectService,
  ) { }

  ngOnInit() {
    if(localStorage.getItem('size-style')){
      this.style.precise = JSON.parse(localStorage.getItem('size-style'));
    }else{
      this.style.precise = true;
    }
  }

  onChange(ans){
    var boolValue = JSON.parse(ans);
    this.style.precise = boolValue;
    localStorage.setItem('size-style', ans);
  }

}
