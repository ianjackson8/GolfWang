import { Component, OnInit } from '@angular/core';
import { ShopService } from 'src/app/services/shop.service';
import { ItemsModels } from '../items/items.model';

@Component({
  selector: 'app-shop-bottoms',
  templateUrl: './shop-bottoms.component.html',
  styleUrls: ['./shop-bottoms.component.css']
})
export class ShopBottomsComponent implements OnInit {
  items: ItemsModels [] = [];
  isEmpty: boolean | any;

  constructor(private shopService: ShopService) { }

  ngOnInit(): void {
    [this.items, this.isEmpty] = this.shopService.showItemInfo("bottoms");
  }
}
