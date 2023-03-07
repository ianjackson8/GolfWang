import { Component } from '@angular/core';
import { items } from '../items/items';
import { ItemsModels } from '../items/items.model';

@Component({
  selector: 'app-shop-tees',
  templateUrl: './shop-tees.component.html',
  styleUrls: ['./shop-tees.component.css']
})
export class ShopTeesComponent {
  items: ItemsModels [] = [];

  constructor() {
    for (var item of items) {
      // only include TEES items
      if (item.type.includes("tees")) {
        this.items.push(item);
      }
    }
  }
}
