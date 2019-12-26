import {Component, Input, OnInit} from '@angular/core';
import {TourBaseComponent} from "../tour-base/tour-base.component";
import {TourService} from "../../services/tour.service";
import {NgbRatingConfig} from "@ng-bootstrap/ng-bootstrap";
import {ReservationService} from "../../services/reservation.service";
import {ActivatedRoute} from "@angular/router";
import {config} from "rxjs";
import {Reservation} from "../../model/reservation";

@Component({
  selector: 'app-cart-tour',
  templateUrl: './cart-tour.component.html',
  styleUrls: ['./cart-tour.component.css']
})
export class CartTourComponent  extends TourBaseComponent implements OnInit {

  constructor(public tourService: TourService, config: NgbRatingConfig, public reservationService: ReservationService,public route: ActivatedRoute)
  {
    super(tourService,config,reservationService);
    config.readonly = true;

  }

  ngOnInit() {
  }


@Input('tour')
public set tour(t: Tour) {
    this._tour  = t;
    this.checkRate();
  }

  @Input('reservation')
  public set reservation(r: Reservation) {
    this._reservation  = r;
  }





}

