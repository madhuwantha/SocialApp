import { Injectable } from '@angular/core';
import {Post} from '../models/post/post.model';
import {Subject} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class PostServiceService {
  private posts: Post[] = [];
  private postUpdated = new Subject<Post[]>();
  constructor(private http: HttpClient , private  router: Router ) { }

  getOnePost(id: string) {
    return this.http.get<{_id: string, title: string, content: string}>
    ('http://localhost:3000/api/post/' + id);
  }

  getPost() {
    this.http
      .get<{massage: string, posts: any}>
      ('http://localhost:3000/api/post')
      .pipe(map((postData) => {
        return postData.posts.map(post => {
          return {
            title: post.title,
            content: post.content,
            id: post._id
          };
        });
      }))
      .subscribe((transformedPosts) => {
        this.posts = transformedPosts;
        this.postUpdated.next([...this.posts]);
      });
  }

  getPostUpdateListener() {
    return this.postUpdated.asObservable();
  }

  // tslint:disable-next-line:variable-name
  // addPost(tittle: string,  content_: string) {
  //   const post: Post = {id: null , title: tittle, content: content_ };
  //   this.http.post<{massage: string, postId: string}>('http://localhost:3000/api/post', post)
  //     .subscribe((res) => {
  //       post.id = res.postId;
  //       this.posts.push(post);
  //       this.postUpdated.next([...this.posts]);
  //       this.router.navigate(['/']);
  //     });
  // }

  // tslint:disable-next-line:variable-name
  addPost(tittle: string,  content_: string, image: File) {
    const postData = new FormData();
    postData.append('title', tittle);
    postData.append('content', content_);
    postData.append('image', image, tittle);
    this.http.post<{massage: string, postId: string}>
    ('http://localhost:3000/api/post', postData)
      .subscribe((res) => {
        const post: Post = {
          id: res.postId,
          content: content_,
          title: tittle
        };
        this.postUpdated.next([...this.posts]);
        this.router.navigate(['/']);
      });
  }

  deletePost(id: string) {
    this.http.delete('http://localhost:3000/api/post/' + id)
      .subscribe(() => {
        this.posts = this.posts.filter(post => post.id !== id);
        this.postUpdated.next([...this.posts]);
      });
  }
  // tslint:disable-next-line:variable-name
  updatePost(id: string, tittle: string , content_: string) {
    const post: Post = {id , title: tittle, content: content_ };
    this.http
      .put('http://localhost:3000/api/post/' + id , post)
      .subscribe(responce => {
        const updatedpost  = [...this.posts];
        const oldPostindex = updatedpost.findIndex(p => p.id === post.id);
        updatedpost[oldPostindex] = post;
        this.postUpdated.next([...this.posts]);
        this.router.navigate(['/']);
      });
  }

}
