import { Pipe, PipeTransform } from '@angular/core';
import {PriceFilter} from "../model/pipes/pipe-filter";

@Pipe({
  name: 'priceFilter'
})
export class PricePipe implements PipeTransform {

  transform(value: any, f:PriceFilter): any {
    return value.filter(v=>v.tour.price >= f.values.min && v.tour.price <= f.values.max)
  }

}
