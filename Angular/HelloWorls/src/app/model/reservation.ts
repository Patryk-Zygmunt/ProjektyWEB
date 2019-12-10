export interface Reservation {
  cost: number;
  _id:string
  tourId:string,
  user?:string,
  start:Date,
  end:Date,
  places:number
}
