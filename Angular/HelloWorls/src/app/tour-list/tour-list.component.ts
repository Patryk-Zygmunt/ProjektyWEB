import { Component, OnInit } from '@angular/core';
import {TourService} from "../services/tour.service";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-tour-list',
  templateUrl: './tour-list.component.html',
  styleUrls: ['./tour-list.component.css']
})
export class TourListComponent implements OnInit {

  reservation: number;
  _toursWithStyle :{tour:Tour,priceStyle:string}[] = [];

  constructor(private tourService: TourService,private modalService: NgbModal) { }

  ngOnInit() {
    this.tourService.reservationAmount
      .subscribe(v=>this.reservation = v);
    this.tourService.getTours().subscribe(v=> this.toursWithStyle   =v)
  }


  private findMaxAndMinPrice(){
    if(this._toursWithStyle.length<=2) return;
    let sorted   = this._toursWithStyle.map(e => ({ ... e })).sort((a, b)=>a.tour.price - b.tour.price); //map kopiuje tablice
    this._toursWithStyle.find(t=>sorted[0].tour.name === t.tour.name).priceStyle = 'text-danger';
    this._toursWithStyle.find(t=>sorted[sorted.length-1].tour.name === t.tour.name).priceStyle = 'text-success'
  }

  deleteTour(name:string){
    this.tourService.deleteTour(name);
    //this.toursWithStyle   = this.tourService.getTours();
  }

  set toursWithStyle( tours: Tour[]){
    this._toursWithStyle = tours.map(t=>({tour:t, priceStyle:'text-info'}));
    this.findMaxAndMinPrice();
  }

  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
    }, (reason) => {
    });
  }

}
