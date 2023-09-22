import { Component, OnInit } from '@angular/core';
import { NewsapiService } from '../newsapi.service';

@Component({
  selector: 'app-bussiness',
  templateUrl: './bussiness.component.html',
  styleUrls: ['./bussiness.component.css']
})
export class BussinessComponent implements OnInit{

constructor(private newApiservice:NewsapiService) {}

  businessnewsDisplay:any=[];
  
  ngOnInit(): void {
    this.newApiservice.businessNews().subscribe((result)=>{
      this.businessnewsDisplay =result.articles;
    });
  }
}
