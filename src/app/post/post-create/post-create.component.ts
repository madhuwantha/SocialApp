import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent implements OnInit {

  constructor() { }

  newPost = '';
  enteredValue = '';

  ngOnInit() {
    this.newPost = 'no content';
  }

  SavePost() {
    // console.dir(post);
    this.newPost = this.enteredValue;
  }
}
