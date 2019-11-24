import { Pipe, PipeTransform } from '@angular/core';
import {PriceFilter, RateFilter} from "../model/pipes/pipe-filter";

@Pipe({
  name: 'rate'
})
export class RatePipe implements PipeTransform {

  transform(value: any, f:RateFilter): any {
    return value.filter(v=>f.values.includes(Math.floor(v.tour.rate)))
  }

}
