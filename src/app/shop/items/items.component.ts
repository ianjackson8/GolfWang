import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent {
  @Input() images: string[];
  @Input() link: string;
  @Input() type: string[];
  @Input() index: string;

  constructor() {
    this.images = [""];
    this.link = "/";
    this.type = [""];
    this.index = "";
  }
}
