import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsapiService {

  constructor(private http:HttpClient) { }



  

  topHeading():Observable<any>{
 const newsApiurl = "https://newsapi.org/v2/top-headlines?country=in&apiKey=eb286c591f2445efa0b026232f8f9f4f";

    return this.http.get(newsApiurl);
  }

  techNews():Observable<any>{
   const techApiurl = "https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=eb286c591f2445efa0b026232f8f9f4f"

    return this.http.get(techApiurl);
  }

  businessNews():Observable<any>{
    const businessApiurl = "https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=eb286c591f2445efa0b026232f8f9f4f"

    return this.http.get(businessApiurl);
  }

}
