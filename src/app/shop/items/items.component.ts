import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent {
  @Input() imgPrimary: string;
  img2?: string;
  img3?: string;
  img4?: string;
  link: string;

  constructor() {
    this.imgPrimary = "";
    this.img2 = "";
    this.img3 = "";
    this.img4 = "";
    this.link = "/";
  }
}
