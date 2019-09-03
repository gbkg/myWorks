import { Component, OnInit } from '@angular/core';
import { ConectionService } from '../connection.service';
import { HttpClient } from '@angular/common/http';
import { StyleSellectService } from '../style-select.service';

@Component({
  selector: 'app-measurment',
  templateUrl: './measurment.component.html',
  styleUrls: ['./measurment.component.css']
})
export class MeasurmentComponent implements OnInit {
  
  fullField:boolean;

  precise:boolean;


  constructor(
    private conect: ConectionService,
    private http: HttpClient,
    private style: StyleSellectService,
  ) { }

  ngOnInit() {
    this.style.connected = true;
    this.fullField = true;
    this.style.precise = true;
    this.style.forms = {chest: '', height: '', waist: '', hips: '', skin: ''};
    this.style.approximateForms = {height: '', skin: '', style1: '', style2: ''};
  }

  change(value){
    this.conect.pageMove(value);
  }

  save(){
    debugger
    this.style.enterMyStyle();
  }


}
