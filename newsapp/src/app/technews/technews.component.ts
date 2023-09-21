import { Component, OnInit } from '@angular/core';
import { NewsapiService } from '../newsapi.service';

@Component({
  selector: 'app-technews',
  templateUrl: './technews.component.html',
  styleUrls: ['./technews.component.css']
})
export class TechnewsComponent implements OnInit {

  constructor(private newApiservice: NewsapiService) {}

  technewsDisplay: any[] = [];
  loading: boolean = true;
  error: string | null = null;

  ngOnInit(): void {
    this.newApiservice.techNews().subscribe(
      (result) => {
        this.technewsDisplay = result.articles;
        this.loading = false;
      },
      (err) => {
        console.error(err);
        this.error = 'Error fetching technology news';
        this.loading = false;
      }
    );
  }
}
