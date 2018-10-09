import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {  Router } from '@angular/router';
import { TestService } from '../test.service';
@Component({
  selector: 'app-trending',
  templateUrl: './trending.component.html',
  styleUrls: ['./trending.component.css']
})
export class TrendingComponent implements OnInit {

  
  res1:any;
  res4:any;
  res5:any;
  res6:any;
  constructor(private http: HttpClient,private router:Router,private test:TestService) {
   
   }

  ngOnInit() {
    this.gettrending();
  }
  gettrending()
  {
    
    this.test.gettrending().subscribe((res1)=>{
      this.res1=res1;
      console.log(this.res1)});
  }
  favourite(movie)
  {
    this.test. addFavourites(movie);
  }
watchlater(movie)
  {
    this.test. addwatchlater(movie);
}
badmovies(movie)
  {
    this.test. addbadmovies(movie);
}
Moreinfo(movieId){
  this.router.navigate(['moreinfo'],{
    queryParams:{
      "id":movieId
  }})
 }
}
