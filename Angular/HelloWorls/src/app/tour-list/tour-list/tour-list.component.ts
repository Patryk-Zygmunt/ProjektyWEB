import { Component, OnInit } from '@angular/core';
import {TourService} from "../../services/tour.service";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {ReservationService} from "../../services/reservation.service";
import {DatePipe} from "../../pipes/date.pipe";
import {PipeFilter} from "../../model/pipes/pipe-filter";


export class TourListComponent{

  _toursWithStyle :{tour:Tour, priceStyle:string}[] = [];
  _tours:Tour[]=[];
  filters=[];
  page=1;
  readonly pageSize=5;

  constructor(public tourService: TourService) {
    this.updateTours()

  }

  updateTours(){
    this.tourService.getTours().subscribe(v=> this.tours   =v)
  }

  private findMaxAndMinPrice(){
    if(this._toursWithStyle.length<=2) return;
    let sorted   = this._toursWithStyle.map(e => ({ ... e })).sort((a, b)=>a.tour.price - b.tour.price); //map kopiuje tablice
    this._toursWithStyle.find(t=>sorted[0].tour.name === t.tour.name).priceStyle = 'text-danger';
    this._toursWithStyle.find(t=>sorted[sorted.length-1].tour.name === t.tour.name).priceStyle = 'text-success'
  }

  set tours(tours: Tour[]){
    this._tours = tours
    this.toursWithStyle = tours.map(t=>({tour:t, priceStyle:'text-info'}));

  }

  set toursWithStyle( tours:{tour:Tour,priceStyle:string}[]){
    this._toursWithStyle = tours.map(t=>({tour:t.tour, priceStyle:'text-info'}));
    this.findMaxAndMinPrice();
  }

  get toursWithStyle( ):{tour:Tour,priceStyle:string}[]{
   return this._toursWithStyle;
  }

  filter(e:PipeFilter[]){
    this.filters = e;
  }
}
