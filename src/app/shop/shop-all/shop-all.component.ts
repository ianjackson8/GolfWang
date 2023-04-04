import { Component, OnInit } from '@angular/core';
import { ShopService } from 'src/app/services/shop.service';
import { ItemsModels } from '../items/items.model';

@Component({
  selector: 'app-shop-all',
  templateUrl: './shop-all.component.html',
  styleUrls: ['./shop-all.component.css']
})
export class ShopAllComponent implements OnInit {
  items: ItemsModels [] = [];
  isEmpty: boolean = false;

  constructor(private shopService: ShopService) { }

  ngOnInit(): void {
    [this.items, this.isEmpty] = this.shopService.showItemInfo("all");
  }
}
