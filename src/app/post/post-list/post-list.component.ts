import {Component, OnInit, OnDestroy} from '@angular/core';
import {PageEvent} from '@angular/material';
import {Post} from '../../models/post/post.model';
import {PostServiceService} from '../../services/post-service.service';
import { Subscription} from 'rxjs';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit , OnDestroy {

  constructor(public postService: PostServiceService) { }

  // property and event binding
  // @Input() post: Post[] = [];

  // using dependancy injection
  post: Post[] = [];
  private postSub: Subscription;
  isLoading = false;
  totalPosts = 10;
  currentPage = 1;
  postsPerPage = 2;
  pageSizeOptions = [1, 2, 5, 10];


  ngOnInit() {
    this.isLoading = true;
    this.postService.getPosts(this.postsPerPage, this.currentPage);
    this.postService.getPostUpdateListener()
      .subscribe((post: Post[]) => {
        this.post = post;
        this.isLoading = false;
      });
  }

  ngOnDestroy(): void {
    if (this.postSub != null) {
      this.postSub.unsubscribe();
    }
  }

  onDelete(id: string) {
    this.postService.deletePost(id);
  }

  onChangePage(pageData: PageEvent) {
    this.postsPerPage = pageData.pageSize;
    this.currentPage = pageData.pageIndex + 1;
    this.postService.getPosts(this.postsPerPage, this.currentPage);
  }
}
