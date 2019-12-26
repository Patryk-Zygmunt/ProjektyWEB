import { Injectable } from '@angular/core';
import {BehaviorSubject, from, Observable, of} from "rxjs";
import {Reservation} from "../model/reservation";
import {filter, map} from "rxjs/operators";
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  private readonly URL = environment.server_url + 'reservation';
  private reservationAmountSource = new BehaviorSubject<number>(0);
  private  reservationValueSource = new BehaviorSubject<number>(0);
   reservationAmount = this.reservationAmountSource.asObservable();
  reservationValue = this.reservationValueSource.asObservable();



  constructor(private http: HttpClient) {
  }

  getReservations() {
    return  this.http.get<Reservation[]>(this.URL + '/all')
  }

  public getReservation(id: string){
    return this.http.get<Reservation>(`${this.URL}/${id}`);
  }
  public getUserTourReservation(userId: string,tourId:string) {
    return this.http.get<Reservation>(`${this.URL}/user/${userId}/tour/${tourId}`);
  }

  public getUserReservations(userId: string) {
    return this.http.get<Reservation[]>(`${this.URL}/user/${userId}`)
      .pipe(
        map(res=>{
            let  cost = res.reduce((pv, cv)=>pv +cv.cost,0)
            let   amount = res.reduce((pv, cv)=>pv +cv.places,0)
            this.reservationAmountSource.next(amount)
            this.reservationValueSource.next(cost)
          return res;
        }))
  }

  public addReservation(t: Reservation){
    this.reservationAmountSource.next( this.reservationAmountSource.getValue() + t.places)
    this.reservationValueSource.next(this.reservationValueSource.getValue() + t.cost)
    return this.http.post(this.URL,t)
  }

  deleteReservation(t: Reservation){
    this.reservationAmountSource.next( this.reservationAmountSource.getValue() - t.places)
    this.reservationValueSource.next(this.reservationValueSource.getValue() - t.cost)
    return this.http.delete(`${this.URL}/${t._id}`);
  }

  public updateReservation(t: Reservation, places: number, price: number){
    this.reservationAmountSource.next( this.reservationAmountSource.getValue() + places)
    this.reservationValueSource.next(this.reservationValueSource.getValue() + places * price)
    return this.http.put(this.URL + '/'+t._id,t)
  }


}
