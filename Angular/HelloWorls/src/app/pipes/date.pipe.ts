import {Injectable, Pipe, PipeTransform} from '@angular/core';
import {DateFilter, PriceFilter} from "../model/pipes/pipe-filter";


@Pipe({
  name: 'dateFilter'
})
export class DatePipe implements PipeTransform {

  transform(value: any, f:DateFilter): any {
    return value.filter(v=>new Date(v.tour.start).getDate() >= f.values.min.getDate() && new Date(v.tour.start).getDate() <= f.values.max.getDate())
  }

}
