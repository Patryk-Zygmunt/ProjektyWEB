import { Injectable } from '@angular/core';
import {BehaviorSubject, from, Observable, of} from "rxjs";
import {Reservation} from "../model/reservation";
import {filter} from "rxjs/operators";
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  private readonly URL = environment.server_url + 'reservation';
  reservationAmountSource = new BehaviorSubject<number>(0);
  reservationValueSource = new BehaviorSubject<number>(0);
  reservationAmount = this.reservationAmountSource.asObservable();
  reservationValue = this.reservationValueSource.asObservable();

  public changeReservation(val:number,price:number) {
    this.reservationAmountSource.next(this.reservationAmountSource.getValue() + val)
    this.reservationValueSource.next(this.reservationValueSource.getValue() + price)
  }

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
    return this.http.get<Reservation[]>(`${this.URL}/user/${userId}`);
  }

  public addReservation(t: Reservation){
    this.changeReservation(t.places, t.cost)
    return this.http.post(this.URL,t)
  }

  deleteReservation(id: number){
    return this.http.delete(`${this.URL}/${id}`);
  }

  public updateReservation(t: Reservation){
    return this.http.put(this.URL + '/'+t._id,t)
  }


}
