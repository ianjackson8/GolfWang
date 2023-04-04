import { Component, OnInit } from '@angular/core';
import { ShopService } from 'src/app/services/shop.service';
import { ItemsModels } from '../items/items.model';

@Component({
  selector: 'app-shop-socks',
  templateUrl: './shop-socks.component.html',
  styleUrls: ['./shop-socks.component.css']
})
export class ShopSocksComponent implements OnInit {
  items: ItemsModels [] = [];
  isEmpty: boolean | any;

  constructor(private shopService: ShopService) { }

  ngOnInit(): void {
    [this.items, this.isEmpty] = this.shopService.showItemInfo("socks");
  }
}
