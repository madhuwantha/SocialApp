import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {AuthService} from '../../services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  isLoading = false;

  constructor(private authSevice: AuthService) { }

  ngOnInit() {
  }

  onLogin(form: NgForm) {
    this.isLoading = true;
    this.authSevice.login(form.value.email, form.value.password);
  }
}
