import { Injectable } from '@angular/core';
import {BehaviorSubject, Subject} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs/operators";
import {environment} from "../../environments/environment";
//import * as data from 'assert/data.json';

@Injectable({
  providedIn: 'root'
})
export class TourService {


  private readonly URL = environment.server_url + 'tour';


  constructor(private http: HttpClient) {
  }

   getTours() {
     return  this.http.get<Tour[]>(this.URL + '/all')
  }

  public getTour(id: string){
      return this.http.get<Tour>(`${this.URL}/${id}`);
   }

   public addTour(t: Tour){
     return this.http.post(this.URL,t)
   }

  deleteTour(id: number){
    return this.http.delete(`${this.URL}/${id}`);
  }

  public updateTour(t: Tour){
    return this.http.put(this.URL + '/'+t._id,t)
  }





}
