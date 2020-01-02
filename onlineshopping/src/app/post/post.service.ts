import { HttpClient } from '@angular/common/http';
import { Injectable } from '../../../node_modules/@angular/core';
import { Observable } from '../../../node_modules/rxjs';
import { Post } from './post.model';


@Injectable({
    providedIn : 'root'
})
export class PostService{
 
    allData:Post[] = [];
    constructor(public httpClientObj : HttpClient)
    {

    }

   // getAllPost(): Observable<Post[]>{
        //make an ajax request!
    //    this.httpClientObj.get("https://jsonplaceholder.typicode.com/posts").subscribe(function(response){
    //        console.log(response);
    //    });

    getAllPost()
    {
        return this.httpClientObj.get<Post[]>("https://jsonplaceholder.typicode.com/posts").toPromise();
   
    }
    getAllData(id  : number)
    {
        return this.httpClientObj.get<Post>("https://jsonplaceholder.typicode.com/posts/" +id ).toPromise();
   
        
    }
       
    
}