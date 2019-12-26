export interface PipeFilter{
type:string,
  values:{};
}


export class PriceFilter implements PipeFilter{

  private _values:{min:number,max:number};

  public  static readonly  type = 'price';
  public   readonly  type = 'price';
 // static get type(){
 //    return 'price'
 //  }

  public constructor(values: { min: number; max: number }) {
    this._values = values;
  }

  public get values(): { min: number; max: number } {
    return this._values;
  }

  public set values(value: { min: number; max: number }) {
    this._values = value;
  }
}


export class DateFilter implements PipeFilter{

  private _values:{min:Date,max:Date};


  constructor(values: { min: Date; max: Date }) {
    this._values = values;
  }

  public  static readonly  type = 'date';
  public   readonly  type = 'date';

  get values(): { min: Date; max: Date } {
    return this._values;
  }

  set values(value: { min: Date; max: Date }) {
    this._values = value;
  }
}


export class RateFilter implements PipeFilter{

  private _values:number[];

  public  static readonly  type = 'rate';
  public   readonly  type = 'rate';


  constructor(values: number[]) {
    this._values = values;
  }

  get values(): number[] {
    return this._values;
  }

  set values(value: number[]) {
    this._values = value;
  }
}

export class CountryFilter implements PipeFilter {

  private _values: string[];


  constructor(values: string[]) {
    this._values = values;
  }

  public static readonly type = 'place';
  public readonly type = 'place';

  get values(): string[] {
    return this._values;
  }

  set values(value: string[]) {
    this._values = value;
  }
}


  export class NameFilter implements PipeFilter{

  private _values:string;


  constructor(values: string) {
    this._values = values;
  }

  public  static readonly  type = 'name';
  public   readonly  type = 'name';

  get values(): string {
    return this._values;
  }

  set values(value: string) {
    this._values = value;
  }
}

