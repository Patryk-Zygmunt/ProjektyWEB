import { Component, OnInit } from '@angular/core';
import {TourService} from "../services/tour.service";
import {ReservationService} from "../services/reservation.service";

@Component({
  selector: 'app-cart-menu',
  templateUrl: './cart-menu.component.html',
  styleUrls: ['./cart-menu.component.css']
})
export class CartMenuComponent implements OnInit {


  cost:number;
  amount:number
  constructor(private reservationService:ReservationService) { }

  ngOnInit() {
    this.reservationService.getReservations().subscribe(res=>{
      this.reservationService.reservationValue.subscribe(v=>this.cost = res.reduce((pv, cv)=>cv.cost+cv.cost,0))
      this.reservationService.reservationAmount.subscribe(v=>this.amount = res.reduce((pv, cv)=>cv.places+cv.places,0))
    })

  }


}
