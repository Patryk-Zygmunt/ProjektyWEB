import {Component, Input, OnInit} from '@angular/core';
import {TourService} from "../services/tour.service";

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {
  newComment: any;


  @Input()
  tour:Tour;


  constructor(private tourService:TourService) { }

  ngOnInit() {
    console.log(this.tour.comments)
  }

  addComment() {

    this.tour.comments = [...this.tour.comments,...[({text:this.newComment,date:new Date()})]]
    this.tourService.updateTour(this.tour)
      .subscribe(_=>  this.newComment = '')
  }
}
