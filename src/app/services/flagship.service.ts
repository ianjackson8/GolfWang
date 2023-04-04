import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FlagshipItemModel } from '../retail/flagship/flagship-item.model';

@Injectable({
  providedIn: 'root'
})
export class FlagshipService {
  private baseURL: string = "https://golfwang-feea0-default-rtdb.firebaseio.com/";
  private flagshipEndpoint: string = "flagship.json"

  constructor(private http: HttpClient) { }

  getFlagshipInfo() {
    return this.http.get<FlagshipItemModel[]>(this.baseURL + this.flagshipEndpoint);
  }
}
