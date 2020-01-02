import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {AuthData} from '../../models/auth/auth.model';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private authtoken: string;
  private isAuthenticated = false;
  private authStatusListener = new Subject<boolean>();

  private tokenTimer: any;

  constructor( private http: HttpClient , private  router: Router  ) { }

  // tslint:disable-next-line:variable-name
  createUser(emial: string, password_: string ) {
    // tslint:disable-next-line:no-shadowed-variable
    const authData: AuthData = {
      email: emial,
      password: password_
    };
    this.http.post<{massage: string}>('http://localhost:3000/api/user/signup', authData )
      .subscribe( res => {
        console.log(res);
      });
  }

  // tslint:disable-next-line:variable-name
  login(emial: string, password_: string) {
    const authData: AuthData = {
      email: emial,
      password: password_
    };
    this.http.post<{token: string, expiresIn: number}>('http://localhost:3000/api/user/login', authData )
      .subscribe( res => {
        // console.log(res);
        if (res.token != null) {
          const expiresInDuration = res.expiresIn;
          this.tokenTimer = setTimeout(() => {
            this.logUot();
          }, expiresInDuration * 1000);
          this.authtoken = res.token;
          this.isAuthenticated = true;
          this.authStatusListener.next(true);
          this.router.navigate(['/']);
        }
      });
  }

  logUot() {
    this.authtoken = null;
    this.isAuthenticated = false;
    this.authStatusListener.next(false);
    clearTimeout(this.tokenTimer);
    this.router.navigate(['/']);
  }

  getToken() {
    return this.authtoken;
  }

  getAuthStatusListener() {
    return this.authStatusListener.asObservable();
  }

  getIsAuth() {
    return this.isAuthenticated;
  }
}
