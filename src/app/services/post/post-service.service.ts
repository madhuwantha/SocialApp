import { Injectable } from '@angular/core';
import {Post} from '../../models/post/post.model';
import {Subject} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class PostServiceService {
  private posts: Post[] = [];
  private postUpdated = new Subject<{post: Post[], postCounter: number }>();
  constructor(private http: HttpClient , private  router: Router ) { }

  getOnePost(id: string) {
    return this.http.get<{_id: string, title: string, content: string, imagePath: string}>
    ('http://localhost:3000/api/post/' + id);
  }

  getPosts(postPerPage: number, currentPage: number) {
    const queryParams = `?pagesize=${postPerPage}&page=${currentPage}`
    this.http
      .get<{massage: string, posts: any, maxPost: number}>
      ('http://localhost:3000/api/post' + queryParams)
      .pipe(map((postData) => {
        return {
          post: postData.posts.map(post => {
            return {
              title: post.title,
              content: post.content,
              id: post._id,
              imagePath: post.imagePath
            };
          }),
          maxPost: postData.maxPost
        };
      }))
      .subscribe((transformedPosts) => {
        this.posts = transformedPosts.post;
        this.postUpdated.next({
          post: [...this.posts],
          postCounter: transformedPosts.maxPost
        });
      });
  }

  getPostUpdateListener() {
    return this.postUpdated.asObservable();
  }


  // tslint:disable-next-line:variable-name
  addPost(tittle: string,  content_: string, image: File) {
    const postData = new FormData();
    postData.append('title', tittle);
    postData.append('content', content_);
    postData.append('image', image, tittle);
    this.http.post<{massage: string, post: Post}>
    ('http://localhost:3000/api/post', postData)
      .subscribe((res) => {
        this.router.navigate(['/']);
      });
  }

  deletePost(id: string) {
    return this.http.delete('http://localhost:3000/api/post/' + id);
  }
  // tslint:disable-next-line:variable-name
  updatePost(id: string, tittle: string , content_: string, image: File | string) {
    let postData: Post | FormData;
    if (typeof image === 'object') {
      postData = new FormData();
      postData.append('id' , id);
      postData.append('title', tittle);
      postData.append('content', content_);
      postData.append('image', image, tittle);
    } else {
      postData = {
        id,
        title: tittle,
        content: content_,
        imagePath: image
      };
    }
    this.http
      .put('http://localhost:3000/api/post/' + id , postData)
      .subscribe(responce => {
        this.router.navigate(['/']);
      });
  }

}
