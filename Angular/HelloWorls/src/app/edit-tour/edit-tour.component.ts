import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {TourService} from "../services/tour.service";

@Component({
  selector: 'app-edit-tour',
  templateUrl: './edit-tour.component.html',
  styleUrls: ['./edit-tour.component.css']
})
export class EditTourComponent implements OnInit {

  tourForm :FormGroup

  @Output()
  added  =new EventEmitter<Tour>()


  private start: Date;
  private end: Date;

  @Input()
  tour:Tour={} as Tour ;

  constructor(private formBuilder: FormBuilder, private tourService: TourService) { }

  ngOnInit() {

    this.tourForm = this.formBuilder.group({
      name: [this.tour.name, [ Validators.required, Validators.minLength(3)]],
      country: [this.tour.country, [ Validators.required, Validators.minLength(3)]],
      description: [this.tour.description, [ Validators.required, Validators.minLength(10)]],
      price: [this.tour.price, [ Validators.required, Validators.min(0)]],
      maxPlaces: [this.tour.maxPlaces, [ Validators.required, Validators.min(0)]]
    })

    this.start = this.tour.start
    this.end = this.tour.end;
  }


  dateChoosen( d:{start:Date,end:Date}){
    this.start = d.start
    this.end = d.end

  }


  addTour($event){
    let tour:Tour = {...this.tourForm.value,start:this.start,end:this.end}
    tour._id = this.tour._id
   // tour.imageUrl = this.tour.imageUrl
    this.tourService.updateTour(tour)
      .subscribe(v=>this.added.emit(tour));
  }


}
