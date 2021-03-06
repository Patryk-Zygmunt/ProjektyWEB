import { Component, OnInit } from '@angular/core';
import {TourService} from "../../services/tour.service";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {TourListComponent} from "../tour-list/tour-list.component";
import {ReservationService} from "../../services/reservation.service";
import {WebsocketService} from "../../services/web-socket.service";

@Component({
  selector: 'app-admin-list',
  templateUrl: './admin-list.component.html',
  styleUrls: ['./admin-list.component.css']
})
export class AdminListComponent extends TourListComponent implements OnInit {

  constructor(public tourService: TourService,private  modalService: NgbModal,public socket:WebsocketService) {
    super(tourService,socket);
  }

  ngOnInit() {
  }

  deleteTour(id:number){
    this.tourService.deleteTour(id).subscribe(_=>this.updateTours())
  }

  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
    }, (reason) => {
    });
  }

}
