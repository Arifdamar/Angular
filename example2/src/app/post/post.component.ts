import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css', "../../../node_modules/bootstrap/dist/css/bootstrap.min.css"]
})
export class PostComponent {

  posts: [any];
  private url = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) {

    http.get(this.url)
      .subscribe(response => {
        this.posts = <[any]>response;
      })

  }

  createPost(input: HTMLInputElement) {
    const post = { title: input.value }
    input.value = '';

    this.http.post(this.url + '/', JSON.stringify(post))
      .subscribe(response => {
        post['id'] = response['id'];
        this.posts.splice(0, 0, post);
      })

  }

}
