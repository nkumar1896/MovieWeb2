import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
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
  constructor(private http: HttpClient) {
   
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
   this.http.post("http://localhost:3000/favourite", movie)
   .subscribe((res4) =>{
     this.res4=res4; 
     console.log(this.res4);
  })

}
badmovies(movie)
  {
   this.http.post("http://localhost:3000/badmovies", movie)
   .subscribe((res5) =>{
     this.res5=res5; 
     console.log(this.res5);
  })

}
watchlater(movie)
  {
   this.http.post("http://localhost:3000/watchlater", movie)
   .subscribe((res6) =>{
     this.res6=res6; 
     console.log(this.res6);
  })

}
}
