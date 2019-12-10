import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Options} from "ng5-slider";
import {CountryFilter, DateFilter, PipeFilter, PriceFilter, RateFilter} from "../model/pipes/pipe-filter";

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {



  @Output()
  filters = new EventEmitter()

  _tours:Tour[]=[];

  filterMap:Map<string,PipeFilter>=new Map()

  minValue: number = 500;
  maxValue: number = 6000;
  options: Options={};
  countryList = []
  nameList = []
  selectedCountries:string[] = []
  selectedTmpC = []
  selectedTmpR = []
  ratesList = Array(5).fill(0).map((_,idx)=>{ return {id:idx,itemName:idx + 1}})
selectedRates:number[] = []

  @Input()
  set tours(tour:Tour[]){
      let sorted   = tour.sort((a, b)=>a.price - b.price).map(v=>v.price)
    let floor = sorted[0]  ? sorted[0] : 0
    let ceil = sorted[sorted.length-1]  ? sorted[sorted.length-1] : 10000
    this.options = {
      floor: floor,
        ceil: ceil
    };

    this.minValue = floor
    this.maxValue = ceil
    this.countryList = tour.map(t=>{ return {id:t._id,itemName:t.country}}).filter((v, i, a) => a.findIndex(va=>va.itemName==v.itemName) === i)
     // this.nameList = tour-short-info.map(t=>{ return {_id:t._id,itemName:t.country}})
  }

  settings = {
    text: "Wybierz",
    enableCheckAll: false,
    classes: "custom-class"
  };


  constructor() { }

  ngOnInit() {
  }


  filterPrice(){
    this.filterMap.set(PriceFilter.type,new PriceFilter( {min:this.minValue,max:this.maxValue}))
  }

  dateChoosen(dates){
    this.filterMap.set(DateFilter.type,new DateFilter( {min:dates.start,max:dates.end}))

  }


  filter(){
    this.filters.emit(Array.from(this.filterMap.values()))
  }



  onCountrySelect(item: any) {
    this.selectedCountries.push(item.itemName)
    this.filterMap.set(CountryFilter.type,new CountryFilter( this.selectedCountries))

  }
  onCountryDeSelect(item: any) {
    this.selectedCountries = this.selectedCountries.filter(v=>v!=item.itemName)
    this.filterMap.set(CountryFilter.type,new CountryFilter( this.selectedCountries))
  }

  onRateSelect(item: any) {
    this.selectedRates.push(item.itemName)
    this.filterMap.set(RateFilter.type,new RateFilter( this.selectedRates))
  }
  OnRateDeSelect(item: any) {
    this.selectedRates = this.selectedRates.filter(v=>v!=item.itemName)
    this.filterMap.set(RateFilter.type,new RateFilter( this.selectedRates))
  }


  onCountryDeSelectAll($event: Array<any>) {
    this.selectedCountries = []
    this.filterMap.delete(CountryFilter.type)
  }

  OnRateDeSelectAll($event: Array<any>) {
    this.selectedRates = []
    this.filterMap.delete(RateFilter.type)
  }
}





