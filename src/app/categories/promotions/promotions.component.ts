import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-promotions',
  templateUrl: './promotions.component.html',
  styleUrls: ['./promotions.component.css']
})
export class PromotionsComponent {
  img: string;
  drop: string;
  link: string;

  constructor() {
    this.img = "";
    this.drop = "DROP TITLE";
    this.link = "/";
  }
}
