import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-signup-footer',
  templateUrl: './signup-footer.component.html',
  styleUrls: ['./signup-footer.component.css']
})
export class SignupFooterComponent {
  @Input() img: string;
  @Input() country: string;
  @Input() phoneCode: string;

  constructor() {
    this.img = "";
    this.country = "";
    this.phoneCode = "";
  }
}
