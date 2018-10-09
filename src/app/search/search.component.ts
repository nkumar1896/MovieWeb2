import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { AppComponent } from '../app.component';
import {ActivatedRoute} from '@angular/router';
import{Router} from '@angular/router';
import { TestService } from '../test.service';
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
  constructor(private http: HttpClient,private rest:ActivatedRoute,private router:Router,private test: TestService) {
   
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
