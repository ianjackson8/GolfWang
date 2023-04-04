import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ShopService } from 'src/app/services/shop.service';
import { items } from '../items/items';
import { ItemsModels } from '../items/items.model';

@Component({
  selector: 'app-shop-accessories',
  templateUrl: './shop-accessories.component.html',
  styleUrls: ['./shop-accessories.component.css']
})
export class ShopAccessoriesComponent implements OnInit{
  items: ItemsModels [] = [];
  isEmpty: boolean | any;

  constructor(private shopService: ShopService) { }

  ngOnInit(): void {
    [this.items, this.isEmpty] = this.shopService.showItemInfo("accessories");
  }
}
