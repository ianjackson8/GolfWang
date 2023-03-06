import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent {
  @Input() imgPrimary: string;
  @Input() img2?: string;
  @Input() img3?: string;
  @Input() img4?: string;
  @Input() link: string;
  @Input() type: string[];

  constructor() {
    this.imgPrimary = "";
    this.img2 = "";
    this.img3 = "";
    this.img4 = "";
    this.link = "/";
    this.type = [""];
  }
}
