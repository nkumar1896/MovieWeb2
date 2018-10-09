import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {  Router } from '@angular/router';
import { TestService } from '../test.service';
@Component({
  selector: 'app-watchlater',
  templateUrl: './watchlater.component.html',
  styleUrls: ['./watchlater.component.css']
})
export class WatchlaterComponent implements OnInit {

  res1:any;
  res6:any;
  mid:number;
  constructor(private http: HttpClient,private router:Router,private test:TestService) {
   
  }

  ngOnInit() {
    this.getWatchLaterMovies();
  }
  getWatchLaterMovies()
  {
    this.test.getWatchLaterMovies().subscribe((res1)=>{
      this.res1=res1;
      console.log(this.res1);
    });
  }
  Moreinfo(movieId){
    this.router.navigate(['moreinfo'],{
      queryParams:{
        "id":movieId
    }})
   }
   deletewatchlater(mid)
  {
   this.http.delete('https://serene-forest-39071.herokuapp.com/watchlater/'+ mid)
   .subscribe((res6) =>{
     this.res6=res6; 
     console.log(this.res6);
  })

}
}
