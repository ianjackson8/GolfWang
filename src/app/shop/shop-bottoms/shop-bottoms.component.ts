import { Component } from '@angular/core';
import { items } from '../items/items';
import { ItemsModels } from '../items/items.model';

@Component({
  selector: 'app-shop-bottoms',
  templateUrl: './shop-bottoms.component.html',
  styleUrls: ['./shop-bottoms.component.css']
})
export class ShopBottomsComponent {
  items: ItemsModels [] = [];

  constructor() {
    for (var item of items) {
      // only include NEW items
      if (item.type.includes("bottoms")) {
        this.items.push(item);
      }
    }
  }
}
