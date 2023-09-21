import { Component, OnInit } from '@angular/core';
import { NewsapiService } from '../newsapi.service';

@Component({
  selector: 'app-topheading',
  templateUrl: './topheading.component.html',
  styleUrls: ['./topheading.component.css']
})
export class TopheadingComponent implements OnInit {

  constructor(private newApiservice: NewsapiService) {}

  topheadingDisplay: any[] = [];
  error: string | null = null; // Add error handling

  ngOnInit(): void {
    this.newApiservice.topHeading().subscribe(
      (result) => {
        console.log(result);
        this.topheadingDisplay = result.articles;
      },
      (err) => {
        console.error(err);
        this.error = 'Error fetching news data'; // Handle errors
      }
    );
  }
}
