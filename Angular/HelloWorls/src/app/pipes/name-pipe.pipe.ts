import { Pipe, PipeTransform } from '@angular/core';
import {DateFilter, NameFilter} from "../model/pipes/pipe-filter";

@Pipe({
  name: 'namePipe'
})
export class NamePipePipe implements PipeTransform {


  transform(value: any, f:NameFilter): any {
    return value.filter(v=>v.tour.name.startsWith(f.values))
  }

}
