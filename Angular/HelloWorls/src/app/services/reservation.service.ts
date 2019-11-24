import { Injectable } from '@angular/core';
import {BehaviorSubject, from, Observable, of} from "rxjs";
import {Reservation} from "../model/reservation";
import {filter} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  constructor() { }

  private reservationAmountSource = new BehaviorSubject<number>(0);
  private reservationValueSource = new BehaviorSubject<number>(0);
  reservationAmount = this.reservationAmountSource.asObservable();
  reservationValue = this.reservationValueSource.asObservable();
  reservation:Reservation[]=[]

  public changeReservation(val:number,tour:Tour){
    this.reservationAmountSource.next(this.reservationAmountSource.getValue() + val)
    this.reservationValueSource.next(this.reservationValueSource.getValue() + tour.price)
    //TODO
    this.reservation.push({tour:tour,places:1} as Reservation);
  }

  public getResrvations():Observable<Reservation[]>{
    return of(this.reservation)
  }

  public getResrvation(tourId:number):Observable<Reservation>{
    let o = from(this.reservation).pipe(filter(r=>r.tour.id==tourId))
    return o[0] ? o[0] : of({} as Reservation);
  }

}
