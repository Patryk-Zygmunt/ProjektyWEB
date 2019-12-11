import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {TourService} from '../../services/tour.service';
import {NgbRatingConfig} from '@ng-bootstrap/ng-bootstrap';
import {ReservationService} from '../../services/reservation.service';
import {TourBaseComponent} from "../tour-base/tour-base.component";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-tour',
  templateUrl: './tour-short-info.component.html',
  styleUrls: ['./tour-short-info.component.css']
})
export class TourShortInfoComponent extends TourBaseComponent implements OnInit {

  constructor(public tourService: TourService, config: NgbRatingConfig, public reservationService: ReservationService,public route: ActivatedRoute)
  {
    super(tourService,config,reservationService);
  }

  ngOnInit() {
  }

  @Input('style')
  priceStyle
  hoveredRate: number;


  @Input('tour')
  public set tour(t: Tour) {
    this._tour  = t;
    this.placesAmountChanged(t.places, t.maxPlaces);
  }







}
