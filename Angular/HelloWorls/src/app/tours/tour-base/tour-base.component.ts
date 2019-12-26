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
  isRate = false;


  placesClass = ['btn', 'btn-info'];
  reservationClass = ['btn', 'btn-success'];
  resignationClass = ['btn', 'btn-danger'];


  @Output()
  toUpdate = new EventEmitter<string>();

  public set tour(tour){
    this._tour = tour
  }

   public makeReservation(p: number) {
   if(this._reservation) this.updateReservation(p)
    else this.addReservation(p)
  }

  public addReservation(p: number) {
    let reservation: Reservation = {
      cost: p * this._tour.price,
      end: this._tour.end,
      places: p,
      start: this._tour.start,
      tourId:this._tour._id,
      user: localStorage.getItem("user_id")
    } as Reservation
    this.reservationService.addReservation(reservation).subscribe((res:any) => {
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
    this.reservationService.updateReservation(reservation,p - this._reservation.places,this._tour.price).subscribe(() => {
      let  places =  p > this._reservation.places ? p - this._reservation.places : 0;
      this.reservationService.getReservation(this._reservation._id)
        .subscribe(v=> this._reservation = v)
      this._tour.places -= p - this._reservation.places;
      this.placesAmountChanged(this._tour.places, this._tour.maxPlaces);
      this.tourService.updateTour(this._tour).subscribe(() => this.toUpdate.next(this._tour._id));
    })
  }


  public set userRate(rate: number) {
    if (!rate) { return; }
    let diffAmount = this._tour.rateAmount + 1;
    if(this.isRate){
      diffAmount-=1;
      this._tour.rate = ((diffAmount - 1) * this._tour.rate - this._userRate) / diffAmount;
      let idx = this._tour.usersRates.findIndex(r=>r.user == localStorage.getItem("user_id"))
      this._tour.usersRates.splice(idx,1);
    }
    this._tour.rate = ((diffAmount - 1) * this._tour.rate + rate) / diffAmount;
    this._userRate = rate;
    this._tour.rateAmount = diffAmount
    this._tour.usersRates.push({user:localStorage.getItem("user_id"),rate:rate})
    this.tourService.updateTour(this._tour).subscribe(async () => this.tour = await this.tourService.getTour(this._tour._id).toPromise());

  }

  public get userRate(){
     return this._userRate
  }

  removeReservation() {
      this.reservationService.deleteReservation(this._reservation)
        .subscribe(()=> {
          this.toUpdate.next(this._reservation._id)
          this._tour.places += this._reservation.places;
          this._reservation  = {} as Reservation;
          this.tourService.updateTour(this._tour).subscribe(()=>  {});

        })
  }

  public checkRate(){
     let userRate = this._tour.usersRates.find(r=>r.user == localStorage.getItem("user_id"))
     this._userRate = userRate ? userRate.rate : 0;
     this.isRate = !!userRate
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
