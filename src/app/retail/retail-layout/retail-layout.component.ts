import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FlagshipItemModel } from '../flagship/flagship-item.model';

@Component({
  selector: 'app-retail-layout',
  templateUrl: './retail-layout.component.html',
  styleUrls: ['./retail-layout.component.css']
})
export class RetailLayoutComponent implements OnInit {
  flagshipItems: FlagshipItemModel[] | undefined = [];

  constructor(private http: HttpClient) {

  }

  ngOnInit(): void {
    this.getFlagshipInfo();
    this.showFlagshipInfo();
  }

  getFlagshipInfo() {
    return this.http.get<FlagshipItemModel[]>('https://golfwang-feea0-default-rtdb.firebaseio.com/flagship.json');
  }

  showFlagshipInfo() {
    this.getFlagshipInfo().subscribe((data: FlagshipItemModel[]) => {
      this.flagshipItems = data;
    })
  }
}
