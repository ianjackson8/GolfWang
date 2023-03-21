import { HttpClient } from '@angular/common/http';
import { Component, Injectable, OnInit } from '@angular/core';
import { UserInfo } from './user-info.model';

@Injectable()
@Component({
  selector: 'app-user-info-test',
  templateUrl: './user-info-test.component.html',
  styleUrls: ['./user-info-test.component.css']
})
export class UserInfoTestComponent implements OnInit {
  myInfo: UserInfo | undefined;

  constructor(private http: HttpClient) {

  }

  ngOnInit(): void {
    this.getUserInfo();
    this.showUserInfo();
  }

  getUserInfo() {
    return this.http.get<UserInfo>('https://golfwang-feea0-default-rtdb.firebaseio.com/my-info.json');
  }

  showUserInfo() {
    this.getUserInfo().subscribe((data: UserInfo) => {
      this.myInfo = data;
    })
  }
}
