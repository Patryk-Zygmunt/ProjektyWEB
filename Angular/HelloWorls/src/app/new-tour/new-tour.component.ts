import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {TourService} from "../services/tour.service";

@Component({
  selector: 'app-new-tour',
  templateUrl: './new-tour.component.html',
  styleUrls: ['./new-tour.component.css']
})
export class NewTourComponent implements OnInit {

  tourForm :FormGroup

  constructor(private formBuilder: FormBuilder, private tourService: TourService) { }

  ngOnInit() {

    this.tourForm = this.formBuilder.group({
      name: ['', Validators.required],
      country: ['', Validators.required],
      description: ['', Validators.required],
      price: ['', Validators.required],
      places: ['', Validators.required]
    })
  }

  addTour($event){
    this.tourService.addTour({...this.tourForm.value});
  }

}
