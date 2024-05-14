import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {TokenService} from './token.service';
import { Observable } from 'rxjs';
import {root_url} from "../../environments/environment";

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  private loggedIn = new BehaviorSubject<boolean>(this.token.loggedIn());
  authStatus = this.loggedIn.asObservable();
  authUser: any;
  authUserPermissions: any;

  changeAuthStatus(value: boolean) {
    this.loggedIn.next(value);
  }

  constructor(
    private http: HttpClient,
    private token: TokenService,
  ) {
  }

  login(data) {
    return this.http.post(root_url + 'login', data);
  }

  sendPasswordResetLink(data) {
    return this.http.post(root_url + 'send-password-reset-link', data);
  }

  changePassword(data) {
    return this.http.post(root_url + 'reset-password', data);
  }

  getAuthUser(): Observable<any>{
    let headers = new HttpHeaders();
    headers = headers.set('Authorization', "Bearer " + this.token.get());
    // const headers = new HttpHeaders({
    //   'Authorization': `Bearer ${localStorage.getItem('token')}`
    // })
    return this.http.get(root_url + 'user-profile', {headers: headers});
  }

}
