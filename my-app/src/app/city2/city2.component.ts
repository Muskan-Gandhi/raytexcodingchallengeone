import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-city2',
  templateUrl: './city2.component.html',
  styleUrls: ['./city2.component.css']
})
export class City2Component implements OnInit {

  constructor(private ds:DataService){}
  
  info:any;
  add(data: any) {
    this.info = data;
    console.log(this.info);
    console.log(data);
  }
  ngOnInit(): void {
    this.ds.getcity2().subscribe((data: any) => this.add(data));
    //this.ds.getdata().subscribe((data) => console.log(data));
  }

}
