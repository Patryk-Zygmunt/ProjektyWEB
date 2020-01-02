import { Component, OnInit } from '@angular/core';
import {TourListComponent} from "../tour-list/tour-list.component";
import {ReservationService} from "../../services/reservation.service";
import {TourService} from "../../services/tour.service";
import {WebsocketService} from "../../services/web-socket.service";

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.css']
})
export class ClientListComponent extends TourListComponent implements OnInit {

  reservation: number;
  isCollapsed: boolean;

  constructor(public tourService: TourService,private reservationService:ReservationService,public socket:WebsocketService) {
    super(tourService,socket);
  }

  ngOnInit() {
    this.reservationService.reservationAmount
      .subscribe(v=>this.reservation = v);
  }

}
