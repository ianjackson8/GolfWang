import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { AuthResponse } from '../create-acct/create-acct-form/AuthResponse';

@Injectable({
  providedIn: 'root'
})
export class AuthLoginService {
  baseUrl: string = 'https://identitytoolkit.googleapis.com/v1/accounts';
  signUpEndpoint: string = 'signUp';
  signInEndpoint: string = 'signInWithPassword';

  constructor(private http: HttpClient) {}

  /**
   * Sign up with username and password via Auth HTTP
   * @param firstName user's first name
   * @param lastName user's last name
   * @param email user's email
   * @param password user's password
   */
  public signUp(firstName: string, lastName: string, email: string, password: string) {
    const requestBody = {
      "email": email,
      "password": password,
      "returnSecureToken": true
    }

    // send HTTP request
    return this.http.post<AuthResponse>(this.baseUrl + ':' + this.signUpEndpoint + '?' + 
      'key=' + environment.firebase.apiKey, requestBody);
  }

  /**
   * sign in user with email & password via Auth HTTP
   * @param email user's email
   * @param password user's password
   */
  public signInWithPassword(email: string, password: string) {
    const requestBody = {
      "email": email,
      "password": password,
      "returnSecureToken": true
    }

    // send HTTP request
    return this.http.post<AuthResponse>(this.baseUrl + ':' + this.signInEndpoint + '?' + 
      'key=' + environment.firebase.apiKey, requestBody)
  }
}
