import { Component, OnInit } from '@angular/core';
import {TourListComponent} from "../tour-list/tour-list.component";
import {ReservationService} from "../../services/reservation.service";
import {TourService} from "../../services/tour.service";

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.css']
})
export class ClientListComponent extends TourListComponent implements OnInit {

  reservation: number;

  constructor(public tourService: TourService,private reservationService:ReservationService) {
    super(tourService);
  }

  ngOnInit() {
    this.reservationService.reservationAmount
      .subscribe(v=>this.reservation = v);
  }

}
