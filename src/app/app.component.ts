import { Component } from '@angular/core';
import { PromotionsItemModel } from './categories/promotions/promotions-item.model';
import { promotions_items } from './categories/promotions/promotions-items';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'GolfWang';
  promotionalItems: PromotionsItemModel [] = [];

  constructor() {
    for (var promotion of promotions_items) {
      this.promotionalItems.push(promotion);
    }
  }
}
