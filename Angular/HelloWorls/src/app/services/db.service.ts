import { Injectable } from '@angular/core';
import {InMemoryDbService} from "angular-in-memory-web-api";
import {Observable} from "rxjs";
import {TourGenerationService} from "./tour-generation.service";

@Injectable({
  providedIn: 'root'
})
export class DbService implements InMemoryDbService {

  constructor(private generator:TourGenerationService) {
  }

  createDb = () => {
    let toursData = this.generator.tours;

   let tours =  toursData.map((t, idx) => {
      return {...t, id: idx,comments:["test"]}
    })
    return{tours}
  }
}
