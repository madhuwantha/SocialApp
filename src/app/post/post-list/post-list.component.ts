import {Component, OnInit, OnDestroy} from '@angular/core';
import {PageEvent} from '@angular/material';
import {Post} from '../../models/post/post.model';
import {PostServiceService} from '../../services/post/post-service.service';
import { Subscription} from 'rxjs';
import {AuthService} from '../../services/auth/auth.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit , OnDestroy {

  constructor(public postService: PostServiceService, private authService: AuthService) { }

  // property and event binding
  // @Input() post: Post[] = [];

  // using dependancy injection
  post: Post[] = [];
  private postSub: Subscription;
  isLoading = false;
  totalPosts = 0;
  currentPage = 1;
  postsPerPage = 2;
  pageSizeOptions = [1, 2, 5, 10];
  private authListenerSubs: Subscription;
  userIsAuthenticated = false;


  ngOnInit() {
    this.isLoading = true;
    this.postService.getPosts(this.postsPerPage, this.currentPage);
    this.postService.getPostUpdateListener()
      .subscribe((postData: {post: Post[], postCounter: number}) => {
        this.post = postData.post;
        this.totalPosts = postData.postCounter;
        this.isLoading = false;
      });
    this.userIsAuthenticated = this.authService.getIsAuth();
    this.authListenerSubs = this.authService.getAuthStatusListener()
      .subscribe(isAuthenticated => {
        this.userIsAuthenticated = isAuthenticated;
      });
  }

  ngOnDestroy(): void {
    if (this.postSub != null) {
      this.postSub.unsubscribe();
    }
    this.authListenerSubs.unsubscribe();
  }

  onDelete(id: string) {
    this.isLoading = true;
    this.postService.deletePost(id)
      .subscribe(() => {
        this.postService.getPosts(this.postsPerPage, this.currentPage);
      });
  }

  onChangePage(pageData: PageEvent) {
    this.isLoading = true;
    this.postsPerPage = pageData.pageSize;
    this.currentPage = pageData.pageIndex + 1;
    this.postService.getPosts(this.postsPerPage, this.currentPage);
  }
}
