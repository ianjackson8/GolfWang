import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-promotions',
  templateUrl: './promotions.component.html',
  styleUrls: ['./promotions.component.css']
})
export class PromotionsComponent {
  @Input() img: string;
  @Input() drop: string;
  @Input() link: string;
  @Input() avail: string;

  constructor() {
    this.img = "";
    this.drop = "DROP TITLE";
    this.link = "/";
    this.avail = ""
  }
}
