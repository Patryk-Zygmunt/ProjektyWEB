import { Component, OnInit } from '@angular/core';
import { TourService } from '../services/tour.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  _toursWithStyle;

  constructor(private tourService:TourService) { }

  ngOnInit() {
    console.log( this.tourService.reservation)
    this.toursWithStyle = this.tourService.reservation

  }

  set toursWithStyle( tours: Tour[]){
    this._toursWithStyle = tours.map(t=>({tour:t, priceStyle:'text-info'}));
  }



}
