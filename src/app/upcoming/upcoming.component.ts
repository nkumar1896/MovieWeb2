import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {  Router } from '@angular/router';
import { TestService } from '../test.service';
@Component({
  selector: 'app-upcoming',
  templateUrl: './upcoming.component.html',
  styleUrls: ['./upcoming.component.css']
})
export class UpcomingComponent implements OnInit {
  res2:any;
  res4:any;
  res5:any;
  res6:any;
  constructor(private http: HttpClient, private router:Router,private test:TestService) {
   
   }

  ngOnInit() {
    this.getupcoming();
  }
  getupcoming()
  {
    this.test.getupcoming().subscribe((res2)=>{
      this.res2=res2;
      console.log(this.res2)});

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
