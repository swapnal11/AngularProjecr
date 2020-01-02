import { Component, OnInit } from '@angular/core';
import { PostService } from './post.service';
import { Post } from './post.model';
import { Todo } from './todo.model';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
  // providers: [PostService] 
})
export class PostComponent {

  allPosts: Post[] = [];
  todos : Todo[] =[];

  /* constructor(public postObj: PostService) {
    let obeservable = this.postObj.getAllPost();
    obeservable.subscribe((response) => {
      this.allPosts = response;
      console.log(response);
    }); */

  //using promises
  constructor(public postObj: PostService) {
    let aPromise = this.postObj.getAllPost();
    aPromise.then((response) => this.allPosts = response, (err) => console.log(err));

    let aPromise1 = this.postObj.getAllPost();
    aPromise1.then((response) => this.todos = response, (err) => console.log(err));
  
  }

}


