import { Component } from '@angular/core';
import { items } from '../items/items';
import { ItemsModels } from '../items/items.model';

@Component({
  selector: 'app-shop-accessories',
  templateUrl: './shop-accessories.component.html',
  styleUrls: ['./shop-accessories.component.css']
})
export class ShopAccessoriesComponent {
  items: ItemsModels [] = [];

  constructor() {
    for (var item of items) {
      // only include ACCESSORIES items
      if (item.type.includes("accessories")) {
        this.items.push(item);
      }
    }
  }
}
