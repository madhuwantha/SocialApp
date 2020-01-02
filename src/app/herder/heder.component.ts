import {Component, OnDestroy, OnInit} from '@angular/core';
import {AuthService} from '../services/auth/auth.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-heder',
  templateUrl: './heder.component.html',
  styleUrls: ['./heder.component.css']
})
export class HederComponent implements OnInit , OnDestroy {

  constructor(private authService: AuthService) { }
  private authListenerSubs: Subscription;
  userIsAuthenticated = false;

  ngOnInit() {
    this.authListenerSubs = this.authService.getAuthStatusListener()
      .subscribe(isAuthenticated => {
        this.userIsAuthenticated = isAuthenticated;
      });
  }

  ngOnDestroy(): void {
    this.authListenerSubs.unsubscribe();
  }

  logOut() {
    this.authService.logUot();
  }
}
