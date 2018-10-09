import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import{Router} from '@angular/router';
import { TestService } from '../test.service';
@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.css']
})
export class CollectionComponent implements OnInit {
res1:any;
res6:any;
  constructor(private http: HttpClient,private router:Router, private test:TestService) {
   
  }
  ngOnInit() {
    this.getFavourite();
  }
  getFavourite()
  {
    this.test.getFavourite().subscribe((res1)=>{
      this.res1=res1;
      console.log(this.res1);
    });
  }
Moreinfo(movieId){
  this.router.navigate(['moreinfo'],{
    queryParams:{
      "id":movieId
  }})
 } 
 
deletefavourite(mid)
  {
  this.test.deletefavourite(mid).subscribe((res6) =>{
    this.res6=res6; 
    this.callOnceMore();
    console.log(this.res6);
 })

}
callOnceMore()
  {
    this.getFavourite();

  }
}
