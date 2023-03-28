import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent {
  @Input() desc: string
  @Input() images: string[]
  @Input() itemName: string
  @Input() link: string
  @Input() numSec: string
  @Input() price: string
  @Input() secImages: string[]
  @Input() type: string[]

  constructor() {
    this.desc = "";
    this.images = [""];
    this.itemName = "";
    this.numSec = "";
    this.price = "";
    this.link = "/";
    this.type = [""];
    this.secImages = [""];
  }
}
