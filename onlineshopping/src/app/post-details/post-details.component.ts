import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '../../../node_modules/@angular/router';
import { Post } from '../post/post.model';
import { PostService } from '../post/post.service';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit {


  thePostId: number;
  postDetails: Post = new Post();


  constructor(public currRoute: ActivatedRoute, public ServiceObj: PostService) { }

  ngOnInit() {

    this.currRoute.params.subscribe(p => this.thePostId = p.id);
    let Promise = this.ServiceObj.getAllData(this.thePostId);
    Promise.then((response) => 
    {
      console.log(response);
      this.postDetails = response;
    }, 
    (err) => console.log(err));
  }

}
