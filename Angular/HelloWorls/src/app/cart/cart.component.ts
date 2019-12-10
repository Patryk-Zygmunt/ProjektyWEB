import { Component, OnInit } from '@angular/core';
import { TourService } from '../services/tour.service';
import {ReservationService} from "../services/reservation.service";
import {Reservation} from "../model/reservation";
import {__await} from "tslib";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  reservations:Reservation[]=[];
  tours:Tour[]=[];
  cost = 0;

  constructor(private tourService:TourService,private reservationService:ReservationService) { }

  ngOnInit() {
  this.fetchReservation()
  }


  async fetchReservation() {
    this.reservations = await this.reservationService.getReservations().toPromise()
    this.reservations.forEach(r=>{
      this.tourService.getTour(r._id)
        .subscribe(t=>this.tours.push(t))
    })
    this.cost = this.reservations.reduce((pv, cv)=>cv.cost+cv.cost,0)
  }


  //TODO
  deleteTour(tour: number) {

  }
}
