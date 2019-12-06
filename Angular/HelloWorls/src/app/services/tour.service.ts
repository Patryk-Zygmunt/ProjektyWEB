import { Injectable } from '@angular/core';
import {BehaviorSubject, Subject} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs/operators";
//import * as data from 'assert/data.json';

@Injectable({
  providedIn: 'root'
})
export class TourService {


  private readonly URL = "http://localhost:8080/api";


  constructor(private http: HttpClient) {
    console.log("start")
  }

   getTours() {
     return  this.http.get<Tour[]>(this.URL + '/tours')
  }

  public getTour(id: number){
      return this.http.get<Tour>(`${this.URL}/tour/${id}`);
   }

   public addTour(t: Tour){
     return this.http.post(this.URL + '/tour',t)
   }

  deleteTour(id: number){
    return this.http.delete(`${this.URL}/tour/${id}`);
  }

  public updateTour(t: Tour){
    return this.http.put(this.URL + '/tour/'+t.id,t)
  }





}
