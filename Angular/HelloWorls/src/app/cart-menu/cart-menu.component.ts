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
    this.reservationService.reservationValue.subscribe(v=>this.cost = v)
    this.reservationService.reservationAmount.subscribe(v=>this.amount = v)
  }


}
