import {Component, OnInit, } from '@angular/core';
import {NgForm} from '@angular/forms';
import {PostServiceService} from '../../services/post-service.service';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {Post} from '../../models/post/post.model';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent implements OnInit {

  constructor(public postService: PostServiceService, public router: ActivatedRoute ) { }
  mode = 'create';
  postId = '';
  post: Post;
  isLoading = false;

  SavePost(form: NgForm) {
    if (!form.valid) {
      return;
    }
    this.isLoading = true;
    // using postServices ( dependency injecting)
    if (this.mode === 'create') {
      this.postService.addPost(form.value.title, form.value.content);
    } else {
      this.postService.updatePost(this.postId, form.value.title, form.value.content);
    }
    form.resetForm();
  }

  ngOnInit(): void {
    this.router.paramMap.subscribe((paraMap: ParamMap) => {
      if (paraMap.has('postId')) {
        this.mode = 'edit';
        this.postId = paraMap.get('postId');
        this.isLoading = true;
        this.postService.getOnePost(this.postId)
          .subscribe(postData => {
            this.post = {id: postData._id, title: postData.title, content: postData.content};
          });
        this.isLoading = false;
      } else {
        this.mode = 'create';
        this.postId = null;
      }
    });
  }
}
