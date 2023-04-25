import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthResponse } from 'src/app/create-acct/create-acct-form/AuthResponse';
import { AuthLoginService } from 'src/app/services/auth-login.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent {
  constructor(private authService: AuthLoginService) {}

  public onSubmit(user: NgForm) {
    this.authService.signInWithPassword(user.value.email, user.value.password).subscribe((data: AuthResponse) => {
      console.log(data);
    })

    user.resetForm();
  }
}
