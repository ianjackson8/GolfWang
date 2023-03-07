import { Component } from '@angular/core';
import { items } from '../items/items';
import { ItemsModels } from '../items/items.model';

@Component({
  selector: 'app-shop-music',
  templateUrl: './shop-music.component.html',
  styleUrls: ['./shop-music.component.css']
})
export class ShopMusicComponent {
  items: ItemsModels [] = [];

  constructor() {
    for (var item of items) {
      // only include MUSIC items
      if (item.type.includes("music")) {
        this.items.push(item);
      }
    }
  }
}
