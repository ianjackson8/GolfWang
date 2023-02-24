import { Component, HostListener, Input } from '@angular/core';

@Component({
  selector: 'app-flagship',
  templateUrl: './flagship.component.html',
  styleUrls: ['./flagship.component.css']
})

export class FlagshipComponent {
    @Input() location: string;
    @Input() street: string;
    @Input() city: string;
    @Input() zip: string;
    @Input() images: string[];
    @Input() imgNum: string[];
    @Input() index: string;

    constructor() {
      this.location = "";
      this.street = "";
      this.city = "";
      this.zip = "";
      this.images = [""];
      this.imgNum = [""];
      this.index = "";
    }
}
