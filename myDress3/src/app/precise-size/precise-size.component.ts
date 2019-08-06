import { Component, OnInit } from '@angular/core';
import { StyleSellectService } from '../style-select.service';

@Component({
  selector: 'app-precise-size',
  templateUrl: './precise-size.component.html',
  styleUrls: ['./precise-size.component.css']
})
export class PreciseSizeComponent implements OnInit {

  constructor(
    private style: StyleSellectService,
  ) { }

  ngOnInit() {
  }

}
