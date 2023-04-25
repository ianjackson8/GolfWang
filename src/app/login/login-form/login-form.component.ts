import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthResponse } from 'src/app/create-acct/create-acct-form/AuthResponse';
import { AuthLoginService } from 'src/app/services/auth-login.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent {
  private authObservable!: Observable<AuthResponse>;

  constructor(private authService: AuthLoginService, private router: Router) {}

  public onSubmit(user: NgForm) {
    this.authObservable = this.authService.signInWithPassword(user.value.email, user.value.password);

    this.authObservable.subscribe((data: AuthResponse) => {
      console.log(data);
      if (data.email != "admin@admin.com" && data.email) {
        this.router.navigate(['/']);
      } else if (data.email == "admin@admin.com") {
        this.router.navigate(['/admin'])
      }
    })

    user.resetForm();
  }
}
