import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent{

  posts;
  constructor(private http: HttpClient) {

    
    http.get('https://api.open5e.com/spells/')
    .subscribe(response => {
      console.log(response);
      this.posts = response;
    })
  }


}
