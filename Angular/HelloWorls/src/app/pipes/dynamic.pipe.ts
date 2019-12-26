import {Injector, Pipe, PipeTransform} from '@angular/core';
import {PricePipe} from "./price.pipe";
import {DatePipe} from "./date.pipe";
import {CountryFilter, DateFilter, NameFilter, PipeFilter, PriceFilter, RateFilter} from "../model/pipes/pipe-filter";
import {RatePipe} from "./rate.pipe";
import {CountryPipe} from "./country.pipe";
import {NamePipePipe} from "./name-pipe.pipe";

@Pipe({
  name: 'dynamicFilter',

})
export class DynamicPipe implements PipeTransform {

  public constructor(private price:PricePipe,private date:DatePipe, private rate:RatePipe, private country:CountryPipe,private name:NamePipePipe) {
    this.pipes = [{type:PriceFilter.type,pipe:this.price},{type:DateFilter.type,pipe:this.date},
      {type:CountryFilter.type, pipe:this.country},{type:RateFilter.type,pipe:this.rate},
      {type:NameFilter.type,pipe:this.name}  ]
  }

  readonly pipes = [];

//TODO wywala się ja zmapuje do tour-short-info
  transform(tours: {tour:Tour, priceStyle:string}[], args: PipeFilter[]): any {
  console.log(args)
    let activePipes =  this.pipes.map(p=>{return {pipe:p.pipe, val:args.find(a=>a.type==p.type)}})
      .filter(f=>f.val);
    let toursF=tours
    activePipes.forEach(f=>toursF=f.pipe.transform(toursF,f.val))
    return toursF;
  }

}
