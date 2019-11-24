import { Pipe, PipeTransform } from '@angular/core';
import {CountryFilter, PriceFilter} from "../model/pipes/pipe-filter";

@Pipe({
  name: 'country'
})
export class CountryPipe implements PipeTransform {

  transform(value: any, f:CountryFilter): any {
    return value.filter(v=>f.values.includes(v.tour.country))
  }

}
