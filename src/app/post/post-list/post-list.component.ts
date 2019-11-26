import {Component, OnInit, OnDestroy} from '@angular/core';
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


  ngOnInit() {
    this.isLoading = true;
    this.postService.getPost();
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
}
