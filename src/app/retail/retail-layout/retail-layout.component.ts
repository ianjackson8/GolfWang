import { Component, OnInit } from '@angular/core';
import { FlagshipService } from 'src/app/services/flagship.service';
import { FlagshipItemModel } from '../flagship/flagship-item.model';

@Component({
  selector: 'app-retail-layout',
  templateUrl: './retail-layout.component.html',
  styleUrls: ['./retail-layout.component.css']
})
export class RetailLayoutComponent implements OnInit {
  flagshipItems: FlagshipItemModel[] | undefined = [];

  constructor(private flagshipService: FlagshipService) {

  }

  ngOnInit(): void {
    this.flagshipService.getFlagshipInfo().subscribe((data: FlagshipItemModel[]) => {
      this.flagshipItems = data;
    })
  }
}
