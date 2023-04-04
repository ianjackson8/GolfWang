import { Component, OnInit } from '@angular/core';
import { ShopService } from 'src/app/services/shop.service';
import { ItemsModels } from '../items/items.model';

@Component({
  selector: 'app-shop-music',
  templateUrl: './shop-music.component.html',
  styleUrls: ['./shop-music.component.css']
})
export class ShopMusicComponent implements OnInit {
  items: ItemsModels [] = [];
  isEmpty: boolean | any;

  constructor(private shopService: ShopService) { }

  ngOnInit(): void {
    [this.items, this.isEmpty] = this.shopService.showItemInfo("music");
  }
}
