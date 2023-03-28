import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { items } from '../items/items';
import { ItemsModels } from '../items/items.model';

@Component({
  selector: 'app-shop-music',
  templateUrl: './shop-music.component.html',
  styleUrls: ['./shop-music.component.css']
})
export class ShopMusicComponent implements OnInit {
  items: ItemsModels [] = [];
  isEmpty: boolean | any

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getItemInfo();
    this.showItemInfo();
  }

  getItemInfo() {
    return this.http.get<ItemsModels[]>('https://golfwang-feea0-default-rtdb.firebaseio.com/items.json');
  }

  showItemInfo() {
    this.getItemInfo().subscribe(data => {
      // iterate over the data object and extract items without the keys
      for (const key in data) {
        if (data.hasOwnProperty(key)) {
          const item = data[key];
          // add the item to the items array if accessory
          if (item.type.includes("music")) {
            this.items.push({
              desc: item.desc,
              images: item.images,
              itemName: item.itemName,
              link: item.link,
              numSec: item.numSec,
              price: item.price,
              secImages: item.secImages,
              type: item.type
            });
          }
        }
      }

      this.isEmpty = !this.items.length;
    });
  }
}
