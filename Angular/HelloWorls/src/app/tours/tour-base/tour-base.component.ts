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
  _reservation:Reservation;


  placesClass = ['btn', 'btn-info'];
  reservationClass = ['btn', 'btn-success'];
  resignationClass = ['btn', 'btn-danger'];


  @Output()
  toUpdate = new EventEmitter<string>();


  //TODO refactor
   public makeReservation(p: number) {
   if(this._reservation) this.updateReservation(p)
    else this.addReservation(p)
  }

  public addReservation(p: number) {
    let reservation: Reservation = {
      cost: p * this._tour.price,
      end: undefined,
      places: p,
      start: undefined,
      tourId:this._tour._id,
      user: localStorage.getItem("user_id")
    } as Reservation
    this.reservationService.addReservation(reservation).subscribe((res:any) => {
      this.reservationService.changeReservation(p, p * this._tour.price);
      this._tour.places -= p;
      this.reservationService.getReservation(res._id)
        .subscribe(v=> this._reservation = v)
      this.placesAmountChanged(this._tour.places, this._tour.maxPlaces);
      this.tourService.updateTour(this._tour).subscribe(() => this.toUpdate.next(this._tour._id));
    })
  }

  public updateReservation(p: number) {
    let reservation =
    {
      cost: p * this._tour.price,
      places:p,
      _id:this._reservation._id
    } as Reservation
    this.reservationService.updateReservation(reservation).subscribe(() => {
      let  places =  p > this._reservation.places ? p - this._reservation.places : 0;
      this.reservationService.changeReservation(places , places * this._tour.price);
      this.reservationService.getReservation(this._reservation._id)
        .subscribe(v=> this._reservation = v)
      this.placesAmountChanged(this._tour.places, this._tour.maxPlaces);
      this.tourService.updateTour(this._tour).subscribe(() => this.toUpdate.next(this._tour._id));
    })
  }


  public set userRate(rate: number) {
    if (!rate) { return; }
    this._userRate = rate;
    this._tour.rateAmount += 1;
    this._tour.rate = ((this._tour.rateAmount - 1) * this._tour.rate + rate) / this._tour.rateAmount;

  }

  removeReservation() {
      this.reservationService.deleteReservation(this._reservation._id)
        .subscribe(()=> {
          this.toUpdate.next(this._reservation._id)
          this._tour.places += this._reservation.places;
          this._reservation  = {} as Reservation;
          this.tourService.updateTour(this._tour).subscribe(()=>  {});

        })
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
