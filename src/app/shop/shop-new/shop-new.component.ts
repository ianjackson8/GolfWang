import { Component } from '@angular/core';
import { items } from '../items/items';
import { ItemsModels } from '../items/items.model';

@Component({
  selector: 'app-shop-new',
  templateUrl: './shop-new.component.html',
  styleUrls: ['./shop-new.component.css']
})
export class ShopNewComponent {
  itemsModel: ItemsModels[] = [];

  constructor() {
    for (var item of items) {
      this.itemsModel.push(item);
    }
  }
}
