import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {  Router } from '@angular/router';
@Component({
  selector: 'app-trending',
  templateUrl: './trending.component.html',
  styleUrls: ['./trending.component.css']
})
export class TrendingComponent implements OnInit {

  
  res1:any;
  res4:any;
  test:any;
  res5:any;
  res6:any;
  constructor(private http: HttpClient,private router:Router) {
   
   }

  ngOnInit() {
    let obj=this.http.get('https://api.themoviedb.org/3/trending/movie/day?api_key=df3b8fae120ac608bc201c6dc996d3e6')
    obj.subscribe((res1)=>{
      this.res1=res1;
      console.log(this.res1);
    })

   
  }
  favourite(movie)
  {
   this.http.post("https://serene-forest-39071.herokuapp.com/favourite", movie)
   .subscribe((res4) =>{
     this.res4=res4; 
     console.log(this.res4);
  })

}
badmovies(movie)
  {
   this.http.post("https://serene-forest-39071.herokuapp.com/badmovies", movie)
   .subscribe((res5) =>{
     this.res5=res5; 
     console.log(this.res5);
  })

}
watchlater(movie)
  {
   this.http.post("https://serene-forest-39071.herokuapp.com/watchlater", movie)
   .subscribe((res6) =>{
     this.res6=res6; 
     console.log(this.res6);
  })

}
Moreinfo(movieId){
  this.router.navigate(['moreinfo'],{
    queryParams:{
      "id":movieId
  }})
 }
}
