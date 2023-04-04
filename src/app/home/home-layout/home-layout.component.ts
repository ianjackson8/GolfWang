import { Component, OnInit } from '@angular/core';
import { PromotionalItemsService } from 'src/app/services/promotional-items.service';
import { PromotionsItemModel } from '../promotions/promotions-item.model';

@Component({
  selector: 'app-home-layout',
  templateUrl: './home-layout.component.html',
  styleUrls: ['./home-layout.component.css']
})
export class HomeLayoutComponent implements OnInit {
  promotionalItems: PromotionsItemModel[] | undefined = [];

  constructor(private promotionalItemsServices: PromotionalItemsService) {

  }

  ngOnInit(): void {
    this.promotionalItemsServices.getPromotionalItems().subscribe((data: PromotionsItemModel[]) => {
      this.promotionalItems = data;
    });
  }
}
