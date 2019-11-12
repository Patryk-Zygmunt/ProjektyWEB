import {Component, Input, OnInit} from '@angular/core';
import {TourService} from "../services/tour.service";

@Component({
  selector: 'app-tour',
  templateUrl: './tour.component.html',
  styleUrls: ['./tour.component.css']
})
export class TourComponent implements OnInit {


  private _tour: Tour = {} as Tour;

  @Input('style')
  priceStyle="";

  private _places = 0;
  placesClass = ['btn', 'btn-info']
  reservationClass = ['btn','btn-success']
  resignationClass = ['btn','btn-danger']

  constructor(private tourService:TourService) { }

  ngOnInit() {
  }

  @Input('tour')
  public set tour(t: Tour){
    this._tour  = t
    this.placesAmountChanged(t.places,t.maxPlaces)
  }

  public set places(p: number){
    this.tourService.changeReservation( this._tour.places -p)
    this._tour.places  = p
    this._places  = p
    this.placesAmountChanged(p,this._tour.maxPlaces)
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
