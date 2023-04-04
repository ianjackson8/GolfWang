import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ShopService } from 'src/app/services/shop.service';
import { ItemsModels } from '../items/items.model';

@Component({
  selector: 'app-shop-hats',
  templateUrl: './shop-hats.component.html',
  styleUrls: ['./shop-hats.component.css']
})
export class ShopHatsComponent implements OnInit {
  items: ItemsModels [] = [];
  isEmpty: boolean | any;

  constructor(private shopService: ShopService) { }

  ngOnInit(): void {
    [this.items, this.isEmpty] = this.shopService.showItemInfo("hats");
  }
}
