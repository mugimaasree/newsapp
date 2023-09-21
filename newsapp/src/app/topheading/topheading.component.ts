import { Component, OnInit } from '@angular/core';
import { NewsapiService } from '../newsapi.service';

@Component({
  selector: 'app-topheading',
  templateUrl: './topheading.component.html',
  styleUrls: ['./topheading.component.css']
})
export class TopheadingComponent implements OnInit {

  constructor(private newApiservice:NewsapiService) {}

topheadingDisplay:any=[];

ngOnInit(): void {
  this.newApiservice.topHeading().subscribe((result)=>{
    console.log(result);
    this.topheadingDisplay=result.articles;
  })
}

}
