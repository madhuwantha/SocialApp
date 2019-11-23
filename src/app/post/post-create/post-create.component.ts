import {Component, OnInit,} from '@angular/core';
import {NgForm} from '@angular/forms';
import {PostServiceService} from '../../services/post-service.service';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {Post} from '../../models/post/post.model';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent implements OnInit{

  constructor(public postService: PostServiceService, public router: ActivatedRoute ) { }

  enteredTittle: '';
  enteredContent: '';

  mode = 'create';
  postId = '';
  post: Post;

  // make the postCreated object can be accessed in outside( parent component ) of the component
  // @Output() postCreated = new EventEmitter<Post>();

  // SavePost() {
  //   const post: Post = {
  //     title: this.enteredTittle,
  //     content : this.enteredContent
  //   };
  //   this.postCreated.emit(post);
  // }

  SavePost(form: NgForm) {
    if (!form.valid) {
      return;
    }
    // using property and event binding
    // const post: Post = {
    //   title: form.value.title,
    //   content : form.value.content
    // };
    // this.postCreated.emit(post);


    // using postServices ( dependancy injecting)
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
        this.post =  this.postService.getOnePost(this.postId);
      } else {
        this.mode = 'create';
        this.postId = null;
      }
    });
  }
}
