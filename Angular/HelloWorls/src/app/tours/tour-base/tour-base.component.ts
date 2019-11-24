import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {TourService} from "../../services/tour.service";
import {NgbRatingConfig} from "@ng-bootstrap/ng-bootstrap";
import {ReservationService} from "../../services/reservation.service";


export class TourBaseComponent {

  constructor(public tourService: TourService, config: NgbRatingConfig, public reservationService: ReservationService) {
    config.readonly = false;
    config.max = 5;
  }

  public set places(p: number) {
    this.reservationService.changeReservation( this._tour.places - p, this._tour);
    this._tour.places  = p;
    this._places  = p;
    this.placesAmountChanged(p, this._tour.maxPlaces);
  }

  //TODO znika user rate bo update leci
  public set userRate(rate: number) {
    if (!rate) { return; }
    this._userRate = rate;
    this._tour.rateAmount += 1;
    this._tour.rate = ((this._tour.rateAmount - 1) * this._tour.rate + rate) / this._tour.rateAmount;
    this.tourService.updateTour(this._tour).subscribe(()=>  this.toUpdate.next(rate));

  }


  _tour: Tour;
  private _userRate = 0;


  private _places = 0;
  placesClass = ['btn', 'btn-info'];
  reservationClass = ['btn', 'btn-success'];
  resignationClass = ['btn', 'btn-danger'];



  @Output()
  toDelete = new EventEmitter<number>();

  @Output()
  toUpdate = new EventEmitter<number>();




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
