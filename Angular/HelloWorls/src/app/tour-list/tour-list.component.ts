import { Component, OnInit } from '@angular/core';
import {TourService} from "../services/tour.service";

@Component({
  selector: 'app-tour-list',
  templateUrl: './tour-list.component.html',
  styleUrls: ['./tour-list.component.css']
})
export class TourListComponent implements OnInit {

  reservation: any;
  toursStyle :{tour:Tour,style:string}[] = []

  constructor(private tourService: TourService) { }

  ngOnInit() {
    this.tourService.reservationAmount
      .subscribe(v=>this.reservation = v)
    this.toursStyle   = this.tours.map(t=>  ({tour:t, style:'text-info'}))
    let sorted   = this.toursStyle.sort((a,b)=>a.tour.price - b.tour.price)
   this.toursStyle.find(t=>sorted[0].tour.name === t.tour.name).style = 'text-danger'
   this.toursStyle.find(t=>sorted[sorted.length-1].tour.name === t.tour.name).style = 'text-success'
  }


 private tours :Tour[] = [
   this.tourService.getRandomTour("Super wycieczka"),
   this.tourService.getRandomTour("Super wycieczka1"),
   this.tourService.getRandomTour("Super wycieczka2"),
   this.tourService.getRandomTour("Super wycieczk3"),
   this.tourService.getRandomTour("Super wycieczk4"),
   this.tourService.getRandomTour("Super wycieczk5"),
   this.tourService.getRandomTour("Super wycieczk6"),
   this.tourService.getRandomTour("Super wycieczk7"),
   this.tourService.getRandomTour("Super wycieczk8"),
  ]

}
