import { Component } from '@angular/core';
import { FlagshipItemModel } from '../flagship/flagship-item.model';
import { flagship_items } from '../flagship/flagship-items';

@Component({
  selector: 'app-retail-layout',
  templateUrl: './retail-layout.component.html',
  styleUrls: ['./retail-layout.component.css']
})
export class RetailLayoutComponent {
  flagshipItems: FlagshipItemModel [] = [];

  constructor() {
    for (var flagship of flagship_items) {
      this.flagshipItems.push(flagship);
    }
  }
}
