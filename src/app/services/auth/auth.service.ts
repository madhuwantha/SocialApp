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
  private userId: string;
  private tokenTimer: any;

  constructor( private http: HttpClient , private  router: Router  ) { }

  autoAuthUser() {
    const authInformation = this.getAuthDate();
    if (authInformation == null) {
      return;
    }
    const now = new Date();
    const expiresIn = authInformation.expirationDate.getTime() - now.getTime();
    if ( expiresIn > 0 ) {
      this.authtoken = authInformation.token;
      this.isAuthenticated = true;
      this.userId = authInformation.userId;
      this.setAuthTimer(expiresIn / 1000);
      this.authStatusListener.next(true);
    }
  }

  // tslint:disable-next-line:variable-name
  createUser(emial: string, password_: string ) {
    // tslint:disable-next-line:no-shadowed-variable
    const authData: AuthData = {
      email: emial,
      password: password_
    };
    this.http.post<{massage: string}>('http://localhost:3000/api/user/signup', authData )
      .subscribe( res => {
        this.router.navigate(['/']);
      }, error => {
        this.authStatusListener.next(false);
      });
  }

  // tslint:disable-next-line:variable-name
  login(emial: string, password_: string) {
    const authData: AuthData = {
      email: emial,
      password: password_
    };
    this.http.post<{token: string, expiresIn: number, userId: string}>('http://localhost:3000/api/user/login', authData )
      .subscribe( res => {
        // console.log(res);
        if (res.token != null) {
          const expiresInDuration = res.expiresIn;
          this.setAuthTimer(expiresInDuration);
          this.authtoken = res.token;
          this.userId = res.userId;
          this.isAuthenticated = true;
          this.authStatusListener.next(true);
          const now = new Date();
          const expirationDate = new Date(now.getTime() + res.expiresIn * 1000);
          // console.log(expirationDate);
          this.saveAuthData(res.token, expirationDate, this.userId );
          this.router.navigate(['/']);
        }
      }, error => {
        this.authStatusListener.next(false);
      });
  }

  logUot() {
    this.authtoken = null;
    this.userId = null;
    this.isAuthenticated = false;
    this.authStatusListener.next(false);
    clearTimeout(this.tokenTimer);
    this.clearAuthData();
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

  private saveAuthData(token: string, expirationDate: Date, userId: string) {
    localStorage.setItem('token', token);
    localStorage.setItem('expiration', expirationDate.toISOString());
    localStorage.setItem('userId', userId);
  }

  private clearAuthData() {
    localStorage.removeItem('token');
    localStorage.removeItem('expiration');
    localStorage.removeItem('userId');
  }
  private getAuthDate() {
    const tokenn = localStorage.getItem('token');
    const expirationDate = localStorage.getItem('expiration');
    // tslint:disable-next-line:variable-name
    const userId_ = localStorage.getItem('userId');
    if (!tokenn || !expirationDate) {
      return;
    }
    return{
      token: tokenn,
      expirationDate: new Date(expirationDate),
      userId: userId_
    };
  }
  private setAuthTimer(duration: number) {
    this.tokenTimer = setTimeout(() => {
      this.logUot();
    }, duration * 1000);
  }
  getUserId() {
    return this.userId;
  }

}
