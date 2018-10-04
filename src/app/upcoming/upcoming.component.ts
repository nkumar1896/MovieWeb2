import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
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
  constructor(private http: HttpClient) {
   
   }

  ngOnInit() {
    
    let obj2=this.http.get('https://api.themoviedb.org/3/movie/upcoming?api_key=df3b8fae120ac608bc201c6dc996d3e6&language=en-US&page=1')
    obj2.subscribe((res2)=>{
      this.res2=res2;
      console.log(this.res2);
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
watchlater(movie)
  {
   this.http.post("http://localhost:3000/watchlater", movie)
   .subscribe((res5) =>{
     this.res5=res5; 
     console.log(this.res5);
  })

}
badmovies(movie)
  {
   this.http.post("http://localhost:3000/badmovies", movie)
   .subscribe((res6) =>{
     this.res6=res6; 
     console.log(this.res6);
  })

}
  

}
