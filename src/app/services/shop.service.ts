import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ItemsModels } from '../shop/items/items.model';

@Injectable({
  providedIn: 'root'
})
export class ShopService {
  private baseURL: string = "https://golfwang-feea0-default-rtdb.firebaseio.com/";
  private itemsEndpoint: string = "items.json"

  constructor(private http: HttpClient) { }

  getItemInfo() {
    return this.http.get<ItemsModels[]>(this.baseURL + this.itemsEndpoint);
  }

  /**
   * gets the items in a specified category 
   * @param type category to get items from
   * @returns tuple of the array of items and boolean if the list is empty
   */
  showItemInfo(type: string) : [ItemsModels[], boolean] {
    var items: ItemsModels[] = [];

    this.getItemInfo().subscribe(data => {
      // iterate over the data object and extract items without keys
      for (const key in data) {
        if (data.hasOwnProperty(key)) {
          const item = data[key];

          if (item.type.includes(type)) {
            items.push(new ItemsModels(item.desc, item.images, item.itemName, 
              item.link, item.numSec, item.price, item.secImages, item.type));
          }
        }
      }

      
    })

    return [items, items.length == 0];
  }
}
