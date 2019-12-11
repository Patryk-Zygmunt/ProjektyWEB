import { Component, OnInit } from '@angular/core';
import {TourShortInfoComponent} from "../tour-short-info/tour-short-info.component";
import {TourService} from "../../services/tour.service";
import {NgbRatingConfig} from "@ng-bootstrap/ng-bootstrap";
import {ReservationService} from "../../services/reservation.service";
import {ActivatedRoute} from "@angular/router";
import {LineLayout, PlainGalleryConfig, PlainGalleryStrategy, Image} from "@ks89/angular-modal-gallery";
import {TourGenerationService} from "../../services/tour-generation.service";
import {Reservation} from "../../model/reservation";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-tour-info',
  templateUrl: './tour-info.component.html',
  styleUrls: ['./tour-info.component.css']
})
export class TourInfoComponent extends TourShortInfoComponent implements OnInit {


  tourForm :FormGroup
  constructor(public tourService: TourService, config: NgbRatingConfig, public reservationService: ReservationService,public route: ActivatedRoute,private formBuilder: FormBuilder
)
    {
      super(tourService,config,reservationService,route);
    }

  async ngOnInit() {

    let id = this.route.snapshot.paramMap.get('_id');
    this.reservationService.getUserTourReservation(localStorage.getItem("user_id"), id)
      .subscribe(v => {this.reservation = v})
    this.tour = await this.tourService.getTour(id).toPromise()
    this.tourForm = this.formBuilder.group({
      places: [0, [Validators.required, Validators.min(1), Validators.max(this._tour.places)]]
    })
  }



  set tour(t:Tour){
    this._tour = t;
    this.images = t.imageUrl.map((img,idx)=>new Image(idx, {
      img: img,
    }))
  }



  plainGalleryRow: PlainGalleryConfig = {
    strategy: PlainGalleryStrategy.ROW,
    layout: new LineLayout({ width: '80px', height: '80px' }, { length: 5, wrap: true }, 'flex-start')
  };

  images = []



  choosenDate(date: { start: Date; end: Date }) {
  //  this._tour.start = date.start;
  //  this._tour.end = date.end;
  }

  removeReservation() {

  }
}
