import { Component, OnInit } from '@angular/core';
import {  ActivatedRoute } from '@angular/router';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-moreinfo',
  templateUrl: './moreinfo.component.html',
  styleUrls: ['./moreinfo.component.css']
})
export class MoreinfoComponent implements OnInit {
id:string;
res7:any={};
res4:any;
res5:any;
res6:any;
  constructor(private http: HttpClient, private route:ActivatedRoute) {
   
  }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.id = params['id']
      this.http.get('https://api.themoviedb.org/3/movie/'+this.id+'?api_key=df3b8fae120ac608bc201c6dc996d3e6').subscribe((response)=>(this.res7=response))
      console.log(this.res7.id+this.id);
    });
  
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



}
