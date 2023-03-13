import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { PromotionsItemModel } from '../promotions/promotions-item.model';

@Component({
  selector: 'app-home-layout',
  templateUrl: './home-layout.component.html',
  styleUrls: ['./home-layout.component.css']
})
export class HomeLayoutComponent implements OnInit {
  promotionalItems: PromotionsItemModel[] | undefined = [];

  constructor(private http: HttpClient) {

  }

  ngOnInit(): void {
    this.getPromotionalInfo();
    this.showPromotionalInfo();
  }

  getPromotionalInfo() {
    return this.http.get<PromotionsItemModel[]>('https://golfwang-feea0-default-rtdb.firebaseio.com/promotions.json');
  }

  showPromotionalInfo() {
    this.getPromotionalInfo().subscribe((data: PromotionsItemModel[]) => {
      this.promotionalItems = data;
    })
  }
}
