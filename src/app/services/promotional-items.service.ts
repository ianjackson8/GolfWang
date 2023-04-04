import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PromotionsItemModel } from '../home/promotions/promotions-item.model';

@Injectable({
  providedIn: 'root'
})
export class PromotionalItemsService {
  private baseURL: string = "https://golfwang-feea0-default-rtdb.firebaseio.com/";
  private promotionsEndpoint: string = "promotions.json"

  constructor(private http: HttpClient) { }

  getPromotionalItems() {
    return this.http.get<PromotionsItemModel[]>(this.baseURL + this.promotionsEndpoint);
  }
}
