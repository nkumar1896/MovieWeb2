import { Component } from '@angular/core';
import { TestService } from './test.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  res:any;
  show:boolean;
  usertitle:string="";
  constructor(private svc:TestService,private  http:HttpClient, private router: Router)
  {
    // this.svc.printToConsole('got the service');
    // let obj= this.http.get('https://api.themoviedb.org/3/search/movie?api_key=df3b8fae120ac608bc201c6dc996d3e6&query='+ this.usertitle)
    // obj.subscribe((response)=>{
    //   this.res=response;
    //   this.show=true;
    //   this.router.navigateByUrl("'search',this.res");
    //   console.log(this.res);
    //})
  }
  
}
