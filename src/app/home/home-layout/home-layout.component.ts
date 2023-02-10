import { Component } from '@angular/core';
import { PromotionsItemModel } from '../promotions/promotions-item.model';
import { promotions_items } from '../promotions/promotions-items';

@Component({
  selector: 'app-home-layout',
  templateUrl: './home-layout.component.html',
  styleUrls: ['./home-layout.component.css']
})
export class HomeLayoutComponent {
  promotionalItems: PromotionsItemModel [] = [];

  constructor() {
    for (var promotion of promotions_items) {
      this.promotionalItems.push(promotion);
    }
  }
}
