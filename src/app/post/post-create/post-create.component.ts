import {Component, OnInit, } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {PostServiceService} from '../../services/post/post-service.service';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {Post} from '../../models/post/post.model';
import {mimeType} from './mime-tyoe.validator';

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
  form: FormGroup;
  imagePreview = String;
  isURLok = false;

  SavePost() {
    if (!this.form.valid) {
      return;
    }
    this.isLoading = true;
    // using postServices ( dependency injecting)
    if (this.mode === 'create') {
      this.postService.addPost(
        this.form.value.title,
        this.form.value.content,
        this.form.value.image
      );
    } else {
      this.postService.updatePost(
        this.postId,
        this.form.value.title,
        this.form.value.content,
        this.form.value.image
      );
    }
    this.form.reset();
  }

  ngOnInit(): void {
    this.form = new FormGroup({
      title: new FormControl(null, {
        validators: [Validators.required, Validators.minLength(3)]
      }),
      content: new FormControl(null, {
        validators: [Validators.required, Validators.minLength(5)]
      }),
      image: new FormControl(null, {
        validators: [Validators.required],
        asyncValidators: [mimeType]
      })
    });
    this.router.paramMap.subscribe((paraMap: ParamMap) => {
      if (paraMap.has('postId')) {
        this.mode = 'edit';
        this.postId = paraMap.get('postId');
        this.isLoading = true;
        this.postService.getOnePost(this.postId)
          .subscribe(postData => {
            this.post = {
              id: postData._id,
              title: postData.title,
              content: postData.content,
              imagePath: postData.imagePath,
              creator: postData.creator
            };
            this.form.setValue({
              title: this.post.title,
              content: this.post.content,
              image: this.post.imagePath
            });
          });
        this.isLoading = false;
      } else {
        this.mode = 'create';
        this.postId = null;
      }
    });
  }

  onFilePicked(event: Event) {
    this.isURLok = false;
    const file = (event.target as HTMLInputElement).files[0];
    this.form.patchValue({image: file});
    this.form.get('image').updateValueAndValidity();
    const reader = new FileReader();
    reader.onload = () => {
      this.imagePreview = reader.result;
    };
    reader.readAsDataURL(file);
    this.isURLok = true;
  }
}
