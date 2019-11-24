import { Component, OnInit } from '@angular/core';
import { TourService } from '../services/tour.service';
import {ReservationService} from "../services/reservation.service";
import {Reservation} from "../model/reservation";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  tours:Reservation[]=[];
  cost:number;

  constructor(private tourService:TourService,private reservationService:ReservationService) { }

  ngOnInit() {
  this.fetchReservation()
    this.reservationService.reservationValue.subscribe(v=>this.cost = v)
  }


  fetchReservation(){
    this.reservationService.getResrvations().subscribe(v=>this.tours = v)

  }





}
