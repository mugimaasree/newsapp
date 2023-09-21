import { Component, OnInit } from '@angular/core';
import { NewsapiService } from '../newsapi.service';

@Component({
  selector: 'app-technews',
  templateUrl: './technews.component.html',
  styleUrls: ['./technews.component.css']
})
export class TechnewsComponent implements OnInit{

  constructor(private newApiservice:NewsapiService) {}

technewsDisplay:any=[];

ngOnInit(): void {
  this.newApiservice.techNews().subscribe((result)=>{
    this.technewsDisplay =result.articles;
  });
}

}
