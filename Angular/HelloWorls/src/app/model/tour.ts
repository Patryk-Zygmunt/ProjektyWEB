interface Tour {
  _id:number;
  name:string,
  country:string,
  description:string,
  imageUrl:string[],
  price:number,
  places:number,
  maxPlaces:number,
  start:Date,
  rate:number,
  rateAmount:number,
  end:Date,
  comments:{text:string,date:Date,user?:string}[]
}

