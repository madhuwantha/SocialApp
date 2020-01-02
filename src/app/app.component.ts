import {Component, OnInit} from '@angular/core';
import {Post} from './models/post/post.model';
import {AuthService} from './services/auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'SosialApp';
  posts: Post[] = [];

  constructor(private authService: AuthService) {}

  onPostAdded(post) {
    this.posts.push(post);
  }

  ngOnInit(): void {
    this.authService.autoAuthUser();
  }
}
