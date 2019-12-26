import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Options} from "ng5-slider";
import {CountryFilter, DateFilter, NameFilter, PipeFilter, PriceFilter, RateFilter} from "../model/pipes/pipe-filter";
import {Observable} from "rxjs";
import {debounceTime, distinctUntilChanged, map} from "rxjs/operators";

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

//Todo wyglad n amaluym do porawy

  @Output()
  filters = new EventEmitter()

  _tours:Tour[]=[];

  filterMap:Map<string,PipeFilter>=new Map()

  minValue: number = 500;
  maxValue: number = 6000;
  options: Options={};
  countryList = []
  selectedCountries:string[] = []
  selectedTmpC = []
  selectedTmpR = []
  ratesList = Array(5).fill(0).map((_,idx)=>{ return {id:idx,itemName:idx + 1}})
selectedRates:number[] = []


  searchName = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(200),
      distinctUntilChanged(),
      map(term => term.length < 1 ? []
        : this._tours.filter(t => t.name.toLowerCase().indexOf(term.toLowerCase()) > -1)
          .slice(0, 10).map(t=>t.name))
    )

  @Input()
  set tours(tour:Tour[]){
    this._tours = tour;
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
    classes: "multiselect"
  };
  selectedName: string="";


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
    if (this.selectedName) {
      this.filterMap.set(NameFilter.type, new NameFilter(this.selectedName))
    }
    else if (this.filterMap.get(NameFilter.type)) {
      this.filterMap.delete(NameFilter.type)
    }
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





