import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import{Router} from '@angular/router';
@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.css']
})
export class CollectionComponent implements OnInit {
res1:any;
  constructor(private http: HttpClient,private router:Router) {
   
  }

  ngOnInit() {
    let obj=this.http.get('http://localhost:3004/favourite')
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
