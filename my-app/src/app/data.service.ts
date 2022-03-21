import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient) { }
  //url="http://localhost:3000/city1";
  urls={
    city1:"http://localhost:3000/city1",
    city2:"http://localhost:3000/city2",
  }

  getcity1(){
    return this.http.get(this.urls.city1);
  }
  getcity2(){
    return this.http.get(this.urls.city2);
  }
}
