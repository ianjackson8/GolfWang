import { Component } from '@angular/core';
import { items } from '../items/items';
import { ItemsModels } from '../items/items.model';

@Component({
  selector: 'app-shop-all',
  templateUrl: './shop-all.component.html',
  styleUrls: ['./shop-all.component.css']
})
export class ShopAllComponent {
  items: ItemsModels [] = [];

  constructor() {
    for (var item of items) {
      // only include ALL items
      if (item.type.includes("all")) {
        this.items.push(item);
      }
    }
  }
}
