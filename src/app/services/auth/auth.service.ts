import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {AuthData} from '../../models/auth/auth.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

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
    this.http.post<{massage: string}>('http://localhost:3000/api/user/login', authData )
      .subscribe( res => {
        console.log(res);
      });
  }
}
