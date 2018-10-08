import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {  Router } from '@angular/router';
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
  constructor(private http: HttpClient, private router:Router) {
   
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
   this.http.post("http://localhost:3004/favourite", movie)
   .subscribe((res4) =>{
     this.res4=res4; 
     console.log(this.res4);
  })

}
watchlater(movie)
  {
   this.http.post("http://localhost:3004/watchlater", movie)
   .subscribe((res5) =>{
     this.res5=res5; 
     console.log(this.res5);
  })

}
badmovies(movie)
  {
   this.http.post("http://localhost:3004/badmovies", movie)
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
