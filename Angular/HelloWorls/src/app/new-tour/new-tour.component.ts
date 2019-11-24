import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {TourService} from "../services/tour.service";

@Component({
  selector: 'app-new-tour',
  templateUrl: './new-tour.component.html',
  styleUrls: ['./new-tour.component.css']
})
export class NewTourComponent implements OnInit {

  tourForm :FormGroup


  @Output()
  added  =new EventEmitter<Tour>()
  private start: Date;
  private end: Date;

  constructor(private formBuilder: FormBuilder, private tourService: TourService) { }

  ngOnInit() {

    this.tourForm = this.formBuilder.group({
      name: ['', [ Validators.required, Validators.minLength(3)]],
      country: ['', [ Validators.required, Validators.minLength(3)]],
      description: ['', [ Validators.required, Validators.minLength(10)]],
      price: ['', [ Validators.required, Validators.min(0)]],
      places: ['', [ Validators.required, Validators.min(0)]]
    })
  }

  dateChoosen( d:{start:Date,end:Date}){
    this.start = d.start
    this.end = d.end

  }


  addTour($event){
    let tour = {...this.tourForm.value,start:this.start,end:this.end}
    this.tourService.addTour(tour)
      .subscribe(v=>this.added.emit(tour));
  }

}
