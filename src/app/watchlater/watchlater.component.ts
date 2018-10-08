import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {  Router } from '@angular/router';
@Component({
  selector: 'app-watchlater',
  templateUrl: './watchlater.component.html',
  styleUrls: ['./watchlater.component.css']
})
export class WatchlaterComponent implements OnInit {

  res1:any;
  constructor(private http: HttpClient,private router:Router) {
   
  }

  ngOnInit() {
    let obj=this.http.get('https://serene-forest-39071.herokuapp.com/watchlater')
    obj.subscribe((res1)=>{
      this.res1=res1;
      console.log(this.res1);
    })
  }
  Moreinfo(movieId){
    this.router.navigate(['moreinfo'],{
      queryParams:{
        "id":movieId
    }})
   }
}
