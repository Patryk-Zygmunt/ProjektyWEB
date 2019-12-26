import {Component, Input, OnInit} from '@angular/core';
import {TourService} from "../services/tour.service";
import {ReservationService} from "../services/reservation.service";

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {
  newComment: any;
canComment = false;
  _tour:Tour;
  @Input()
  set tour(tour:Tour){
    this._tour = tour;
    this.reservationService.getUserTourReservation(localStorage.getItem("user_id"),tour._id)
      .subscribe(res=>this.canComment = !! res
      ,error => this.canComment = false
      )
  }



  constructor(private tourService:TourService,private reservationService: ReservationService) { }

  ngOnInit() {
    console.log(this._tour.comments)

  }

  addComment() {
    if(!this.canComment) return;
    this._tour.comments = [...this._tour.comments,...[({text:this.newComment,date:new Date()})]]
    this.tourService.updateTour(this._tour)
      .subscribe(_=>  this.newComment = '')
  }
}
