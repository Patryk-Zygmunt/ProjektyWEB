import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {TourService} from "../../services/tour.service";
import {NgbModal, NgbRatingConfig} from "@ng-bootstrap/ng-bootstrap";
import {ReservationService} from "../../services/reservation.service";
import {ActivatedRoute} from "@angular/router";
import {TourBaseComponent} from "../tour-base/tour-base.component";

@Component({
  selector: 'app-admin-tour',
  templateUrl: './admin-tour.component.html',
  styleUrls: ['./admin-tour.component.css']
})
export class AdminTourComponent extends TourBaseComponent implements OnInit {

  constructor(public tourService: TourService, config: NgbRatingConfig, public reservationService: ReservationService,private  modalService: NgbModal)
  {
    super(tourService,config,reservationService);
  }

  ngOnInit() {
  }

  @Output()
  toDelete = new EventEmitter<number>();

  @Input('tour')
  public set tour(t: Tour) {
    this._tour  = t;
  }

  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
    }, (reason) => {
    });
  }


  updateTour() {
      this.tourService.getTour(this._tour._id)
        .subscribe(res=>this.tour = res)
  }
}
