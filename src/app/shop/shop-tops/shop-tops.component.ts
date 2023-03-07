import { Component } from '@angular/core';
import { items } from '../items/items';
import { ItemsModels } from '../items/items.model';

@Component({
  selector: 'app-shop-tops',
  templateUrl: './shop-tops.component.html',
  styleUrls: ['./shop-tops.component.css']
})
export class ShopTopsComponent {
  items: ItemsModels [] = [];

  constructor() {
    for (var item of items) {
      // only include TOPS items
      if (item.type.includes("tops")) {
        this.items.push(item);
      }
    }
  }
}
