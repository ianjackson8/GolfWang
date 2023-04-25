import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthLoginService } from 'src/app/services/auth-login.service';
import { AuthResponse } from './AuthResponse';

@Component({
  selector: 'app-create-acct-form',
  templateUrl: './create-acct-form.component.html',
  styleUrls: ['./create-acct-form.component.css']
})
export class CreateAcctFormComponent {
  constructor(private authService: AuthLoginService) {}

  public onSubmit(user: NgForm) {
    this.authService.signUp(user.value.firstName, user.value.lastName, user.value.email, user.value.password).subscribe((data: AuthResponse) => {
      console.log(data);
    })

    user.resetForm();
  }
}
