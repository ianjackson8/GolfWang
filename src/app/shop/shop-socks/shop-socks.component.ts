import { Component } from '@angular/core';
import { items } from '../items/items';
import { ItemsModels } from '../items/items.model';

@Component({
  selector: 'app-shop-socks',
  templateUrl: './shop-socks.component.html',
  styleUrls: ['./shop-socks.component.css']
})
export class ShopSocksComponent {
  items: ItemsModels [] = [];

  constructor() {
    for (var item of items) {
      // only include SOCKS items
      if (item.type.includes("socks")) {
        this.items.push(item);
      }
    }
  }
}
