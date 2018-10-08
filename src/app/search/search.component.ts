import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { AppComponent } from '../app.component';
import {ActivatedRoute} from '@angular/router';
import{Router} from '@angular/router';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  usertitle:string="";
  res:string;
  show:boolean;
  res4:any;
  res5:any;
  res6:any;
  constructor(private http: HttpClient,private rest:ActivatedRoute,private router:Router) {
   
   }
  

  ngOnInit() {
    //this.svc.printToConsole('got the service');
    this.rest.params.subscribe(params=>this.res=params.title);
    console.log(this.res);
    let obj= this.http.get('https://api.themoviedb.org/3/search/movie?api_key=df3b8fae120ac608bc201c6dc996d3e6&query='+ this.res)
    obj.subscribe((response)=>{
      this.res4=response;
      this.show=true;
      //this.router.navigateByUrl("'search',this.res");
      console.log(this.res4);
    })
   
    console.log(this.res);
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
