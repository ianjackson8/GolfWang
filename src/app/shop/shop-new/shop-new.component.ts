import { Component } from '@angular/core';
import { items } from '../items/items';
import { ItemsModels } from '../items/items.model';

@Component({
  selector: 'app-shop-new',
  templateUrl: './shop-new.component.html',
  styleUrls: ['./shop-new.component.css']
})
export class ShopNewComponent {
  items: ItemsModels [] = [];

  constructor() {
    for (var item of items) {
      // only include NEW items
      if (item.type.includes("new")) {
        this.items.push(item);
      }
    }
  }
}
