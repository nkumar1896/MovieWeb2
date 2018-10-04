import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Component({
  selector: 'app-badmovies',
  templateUrl: './badmovies.component.html',
  styleUrls: ['./badmovies.component.css']
})
export class BadmoviesComponent implements OnInit {
res1:any;
  constructor(private http: HttpClient) {
   
  }
  ngOnInit() {
    let obj=this.http.get('http://localhost:3000/badmovies')
    obj.subscribe((res1)=>{
      this.res1=res1;
      console.log(this.res1);
    })
  }

}
