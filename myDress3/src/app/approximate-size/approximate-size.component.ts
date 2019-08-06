import { Component, OnInit } from '@angular/core';
import { StyleSellectService } from '../style-select.service';

@Component({
  selector: 'app-approximate-size',
  templateUrl: './approximate-size.component.html',
  styleUrls: ['./approximate-size.component.css']
})
export class ApproximateSizeComponent implements OnInit {
  forms = {chest: '', waist: '', hips: '', height: '', skin: ''};

  constructor(
    private style: StyleSellectService,
  ) { }

  ngOnInit() {
  }

}
