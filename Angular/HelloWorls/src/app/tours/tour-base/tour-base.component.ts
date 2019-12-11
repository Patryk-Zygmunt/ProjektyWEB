import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {TourService} from "../../services/tour.service";
import {NgbRatingConfig} from "@ng-bootstrap/ng-bootstrap";
import {ReservationService} from "../../services/reservation.service";
import {Reservation} from "../../model/reservation";


export class TourBaseComponent {

  constructor(public tourService: TourService, config: NgbRatingConfig, public reservationService: ReservationService) {
    config.readonly = false;
    config.max = 5;
  }

  _tour: Tour;
  _userRate = 0;
  reservation:Reservation;


  placesClass = ['btn', 'btn-info'];
  reservationClass = ['btn', 'btn-success'];
  resignationClass = ['btn', 'btn-danger'];


  @Output()
  toUpdate = new EventEmitter<number>();


  //TODO
  public makeReservation(p: number) {
    let reservation: Reservation = {
      cost: p * this._tour.price,
      end: undefined,
      places: p,
      start: undefined,
      tourId: this._tour._id,
      user: localStorage.getItem("user_id")
    } as Reservation
    this.reservationService.addReservation(reservation).subscribe(() => {
      this.reservationService.changeReservation(p, p * this._tour.price);
      this._tour.places -= p;
      this.reservation = reservation
      this.placesAmountChanged(this._tour.places, this._tour.maxPlaces);
      this.tourService.updateTour(this._tour).subscribe(() => this.toUpdate.next(p));
    })
  }


  //TODO
  public set userRate(rate: number) {
    if (!rate) { return; }
    this._userRate = rate;
    this._tour.rateAmount += 1;
    this._tour.rate = ((this._tour.rateAmount - 1) * this._tour.rate + rate) / this._tour.rateAmount;
    this.tourService.updateTour(this._tour).subscribe(()=>  this.toUpdate.next(rate));

  }



  public placesAmountChanged(p: number, maxPlaces: number) {
    if (p <= 0) {
      this.placesClass[1] = 'btn-secondary';
      this.placesClass.push('disabled');
      this.reservationClass.push('disabled');
      this.reservationClass[1] = 'btn-secondary';
      this.resignationClass = ['btn', 'btn-danger'];
    } else if (p < 3) {
      this.placesClass[1] = 'btn-warning';
      this.reservationClass = ['btn', 'btn-success'];
      this.resignationClass = ['btn', 'btn-danger'];
    } else if (p >= maxPlaces) {
      this.resignationClass.push('disabled');
      this.resignationClass[1] = 'btn-secondary';
      this.placesClass = ['btn', 'btn-info'];
      this.reservationClass = ['btn', 'btn-success'];
    } else {
      this.placesClass = ['btn', 'btn-info'];
      this.reservationClass = ['btn', 'btn-success'];
      this.resignationClass = ['btn', 'btn-danger'];
    }
  }

}
