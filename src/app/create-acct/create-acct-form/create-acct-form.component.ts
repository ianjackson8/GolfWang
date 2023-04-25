import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthLoginService } from 'src/app/services/auth-login.service';
import { AuthResponse } from './AuthResponse';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-create-acct-form',
  templateUrl: './create-acct-form.component.html',
  styleUrls: ['./create-acct-form.component.css']
})
export class CreateAcctFormComponent {
  private authObservable!: Observable<AuthResponse>;

  constructor(private authService: AuthLoginService, private router: Router) {}

  public onSubmit(user: NgForm) {
    this.authObservable = this.authService.signUp(user.value.firstName, user.value.lastName, user.value.email, user.value.password);

    this.authObservable.subscribe((data: AuthResponse) => {
      console.log(data);
      if (data.idToken) {
        this.router.navigate(['/']);
      }
    })

    user.resetForm();
  }
}
