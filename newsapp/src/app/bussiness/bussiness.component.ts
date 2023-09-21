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
  loading: boolean = true; // Add loading indicator
  error: string | null = null; // Add error handling
  
  ngOnInit(): void {

  this.newApiservice.businessNews().subscribe(
    (result) => {
      console.log(result);
      this.businessnewsDisplay = result.articles;
      this.loading = false; // Turn off loading indicator on success
    },
    (err) => {
      console.error(err);
      this.error = 'Error fetching news data'; // Handle errors
      this.loading = false; // Turn off loading indicator on error
    }
  );
}

}
