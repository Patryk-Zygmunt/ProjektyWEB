import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {TourService} from "../services/tour.service";
import {NgbRatingConfig} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-tour',
  templateUrl: './tour.component.html',
  styleUrls: ['./tour.component.css']
})
export class TourComponent implements OnInit {


  private _tour: Tour = {} as Tour;
  private _userRate:number=0;
  hoveredRate:number=0;

  @Input('style')
  priceStyle="";

  private _places = 0;
  placesClass = ['btn', 'btn-info']
  reservationClass = ['btn','btn-success']
  resignationClass = ['btn','btn-danger']

  constructor(private tourService:TourService, config: NgbRatingConfig) {
    config.readonly = false;
    config.max = 5;
  }

  ngOnInit() {
  }

  @Input('tour')
  public set tour(t: Tour){
    this._tour  = t
//    console.log(t)
    this.placesAmountChanged(t.places,t.maxPlaces)
  }
  @Output()
  toDelete = new EventEmitter<string>();

  public set places(p: number){
    this.tourService.changeReservation( this._tour.places -p,this._tour)
    this._tour.places  = p
    this._places  = p
    this.placesAmountChanged(p,this._tour.maxPlaces)
  }

  public set userRate(rate:number){
    if(!rate) return;
    this._userRate = rate;
    this._tour.rateAmount+=1;
    this._tour.rate = ((this._tour.rateAmount-1) * this._tour.rate + rate) / this._tour.rateAmount
  }


  dateChoosen( d:{start:Date,end:Date}){
        this._tour.start = d.start
        this._tour.end = d.end

  }

  public placesAmountChanged(p: number, maxPlaces:number) {
    if (p <= 0) {
      this.placesClass[1] = 'btn-secondary'
      this.placesClass.push('disabled')
      this.reservationClass.push('disabled')
      this.reservationClass[1] = 'btn-secondary'
      this.resignationClass = ['btn', 'btn-danger']
    } else if (p < 3) {
      this.placesClass[1] = 'btn-warning'
      this.reservationClass = ['btn', 'btn-success']
      this.resignationClass = ['btn', 'btn-danger']
    } else if (p >= maxPlaces) {
      this.resignationClass.push('disabled')
      this.resignationClass[1] = 'btn-secondary'
      this.placesClass = ['btn', 'btn-info']
      this.reservationClass = ['btn', 'btn-success']
    } else {
      this.placesClass = ['btn', 'btn-info']
      this.reservationClass = ['btn', 'btn-success']
      this.resignationClass = ['btn', 'btn-danger']
    }
  }

}
