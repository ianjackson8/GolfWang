import { Component, Input } from '@angular/core';

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

    constructor() {
      this.location = "";
      this.street = "";
      this.city = "";
      this.zip = "";
      this.images = [""];
    }
}
