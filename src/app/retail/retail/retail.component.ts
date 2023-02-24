import { Component } from '@angular/core';
import { FlagshipItemModel } from '../flagship/flagship-item.model';
import { flagship_items } from '../flagship/flagship-items';

@Component({
  selector: 'app-retail',
  templateUrl: './retail.component.html',
  styleUrls: ['./retail.component.css']
})
export class RetailComponent {
  flagshipItems: FlagshipItemModel [] = [];

  constructor() {
    for (var flagship of flagship_items) {
      this.flagshipItems.push(flagship);
    }
  }
}
