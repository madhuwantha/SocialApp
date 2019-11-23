import { Component } from '@angular/core';
import {Post} from './models/post/post.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SosialApp';
  posts: Post[] = [];

  onPostAdded(post) {
    this.posts.push(post);
  }
}
