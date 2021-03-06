interface Tour {
  _id:string;
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
  usersRates:[{user:string,rate:number}],
  comments:{text:string,date:Date,user?:string}[]
}

