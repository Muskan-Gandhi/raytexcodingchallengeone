import { Component } from '@angular/core';
import { DataService } from './data.service';
// import { http://api.weatherstack.com/historical};
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
  constructor(private ds:DataService){}
  
  info:any;
  add(data: any) {
    this.info = data;
    console.log(this.info);
    console.log(data);
  }
  ngOnInit(): void {
    this.ds.getcity1().subscribe((data: any) => this.add(data));
    
    // ? access_key = YOUR_ACCESS_KEY
    // & query = New York
    // & historical_date = 2015-01-21
    // & hourly = 1
    this.ds.getcity1().subscribe((data) => console.log(data));
  }
}
