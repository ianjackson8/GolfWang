import { Component } from '@angular/core';
import { items } from '../items/items';
import { ItemsModels } from '../items/items.model';

@Component({
  selector: 'app-shop-hats',
  templateUrl: './shop-hats.component.html',
  styleUrls: ['./shop-hats.component.css']
})
export class ShopHatsComponent {
  items: ItemsModels [] = [];

  constructor() {
    for (var item of items) {
      // only include HATS items
      if (item.type.includes("hats")) {
        this.items.push(item);
      }
    }
  }
}
