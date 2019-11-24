import { Component, OnInit } from '@angular/core';
import {TourShortInfoComponent} from "../tour-short-info/tour-short-info.component";
import {TourService} from "../../services/tour.service";
import {NgbRatingConfig} from "@ng-bootstrap/ng-bootstrap";
import {ReservationService} from "../../services/reservation.service";
import {ActivatedRoute} from "@angular/router";
import {LineLayout, PlainGalleryConfig, PlainGalleryStrategy, Image} from "@ks89/angular-modal-gallery";
import {TourGenerationService} from "../../services/tour-generation.service";
import {Reservation} from "../../model/reservation";

@Component({
  selector: 'app-tour-info',
  templateUrl: './tour-info.component.html',
  styleUrls: ['./tour-info.component.css']
})
export class TourInfoComponent extends TourShortInfoComponent implements OnInit {

  constructor(public tourService: TourService, config: NgbRatingConfig, public reservationService: ReservationService,private route: ActivatedRoute)
    {
      super(tourService,config,reservationService);
    }

    reservation:Reservation;

  ngOnInit() {

      let id = parseInt(this.route.snapshot.paramMap.get('id'));
    this.tourService.getTour(id)
      .subscribe(v=>this.tour=v)
    this.reservationService.getResrvation(id)
      .subscribe(v=>this.reservation = v)
  }


  plainGalleryRow: PlainGalleryConfig = {
    strategy: PlainGalleryStrategy.ROW,
    layout: new LineLayout({ width: '80px', height: '80px' }, { length: 5, wrap: true }, 'flex-start')
  };

  images = []

  set tour(t:Tour){
    this._tour = t;
    this.images = t.imageUrl.map((img,idx)=>new Image(idx, {
      img: img,
    }))
  }

  choosenDate(date: { start: Date; end: Date }) {
    this._tour.start = date.start;
    this._tour.end = date.end;
  }
}
