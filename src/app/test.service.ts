import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class TestService {
res2:any;
res4:any;
res5:any;
res6:any;
usertitle:string="";
  constructor(private http: HttpClient) {
   
  }
  printToConsole(arg)
  {
    console.log(arg);
    
  }
  addFavourites(movie){
    this.http.post("https://serene-forest-39071.herokuapp.com/favourite", movie)
    .subscribe((res4) =>{
      this.res4=res4; 
      console.log(this.res4);
   })
    
  }
  addwatchlater(movie)
  {
    this.http.post("https://serene-forest-39071.herokuapp.com/watchlater", movie)
   .subscribe((res5) =>{
     this.res5=res5; 
     console.log(this.res5);
  })
  }
  addbadmovies(movie)
  {
    this.http.post("https://serene-forest-39071.herokuapp.com/badmovies", movie)
    .subscribe((res6) =>{
      this.res6=res6; 
      console.log(this.res6);
   })
  }
  getupcoming()
  {
    return this.http.get('https://api.themoviedb.org/3/movie/upcoming?api_key=df3b8fae120ac608bc201c6dc996d3e6&language=en-US&page=1');
  }
  gettrending()
  {
    return this.http.get('https://api.themoviedb.org/3/trending/movie/day?api_key=df3b8fae120ac608bc201c6dc996d3e6');
    
  }
  getWatchLaterMovies()
  {
    return this.http.get('https://serene-forest-39071.herokuapp.com/watchlater');
  }
  getFavourite()
  {
    return this.http.get('https://serene-forest-39071.herokuapp.com/favourite');
  }
  getBadMovies()
  {
    return this.http.get('https://serene-forest-39071.herokuapp.com/badmovies');
  }
  
}
