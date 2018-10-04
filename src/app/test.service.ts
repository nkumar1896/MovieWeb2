import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class TestService {
res:any;
usertitle:string="";
  constructor(private http: HttpClient) {
   
  }
  printToConsole(arg)
  {
    console.log(arg);
    
  }
  
}
