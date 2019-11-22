import { Injectable } from '@angular/core';
import {BehaviorSubject, Subject} from "rxjs";
import {HttpClient} from "@angular/common/http";
//import * as data from 'assert/data.json';

@Injectable({
  providedIn: 'root'
})
export class TourService {

  private reservationAmountSource = new BehaviorSubject<number>(0);
      reservationAmount = this.reservationAmountSource.asObservable();
      reservation:Tour[]=[]
  //private tours :Tour[] = JSON.parse(data);



  constructor(private http: HttpClient) {
    console.log("start")
    //this.getToursFromFile().subscribe(v=>this.tours = v);

  }

   getToursFromFile() {
   // return  this.http.get<Tour[]>('assets/data.json')
  }




      public changeReservation(val:number,tour:Tour){
        this.reservationAmountSource.next(this.reservationAmountSource.getValue() + val)
        this.reservation.push(tour);
      }


      public getTours():Tour[]{
      return this.tours;
        }

    public getTour(n: number):Tour{
      return this.tours[n];
   }
   public addTour(t: Tour){
      this.tours.push(t)
   }

  deleteTour(name:string){
    this.tours = this.tours.filter(t=>t.name!=name)
  }

      public getRandomTour(name){
      let t:Tour  =   {
          name:name,
            country:this.countries[Math.floor(Math.random() * (25 + 1))].country,
          description:"Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus\n" +
        "        odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla.\n" +
        "        Donec lacinia congue felis in faucibus.",
          imageUrl: this.images[Math.floor(Math.random() * 4)],
          price:Math.floor(Math.random() * (6000 - 1000 + 1) + 1000),
          maxPlaces:Math.floor(Math.random() * (60 - 5 + 1) + 5),
          start:new Date("2020-02-11"),
          end:new Date("2020-02-11"),
        places:undefined,
        rate:0,
        rateAmount:0,
      } as Tour;
        t.places = t.maxPlaces;
        t.start.setDate(t.start.getDate() - Math.floor(Math.random() * (80 - 5 + 1) + 5))
        t.end.setDate(t.start.getDate() +  Math.floor(Math.random() * (20 - 5 + 1) + 5))
return t;
      }


readonly  images = [
  "https://i.content4travel.com/cms/img/u/desktop/se/xczjarm_0.jpg?version=180501-12?version=1",
  "https://i.content4travel.com/cms/img/u/desktop/prodsliderphoto/hrgpyra_0.jpg?version=190528-10?version=1",
  "https://i.content4travel.com/cms/img/u/desktop/prodsliderphoto/xsomale_0.jpg?version=89?version=1",
  "https://i.content4travel.com/cms/img/u/desktop/prodsliderphoto/xczprah_0.jpg?version=180831-12?version=1",
  "https://i.content4travel.com/cms/img/u/desktop/seres/xitklas_0.jpg"
]


  readonly countries = [
    {
      "country": "Afghanistan"
    },
{
  "country": "Albania"
},
{
  "country": "Algeria"
},
{
  "country": "American Samoa"
},
{
  "country": "Andorra"
},
{
  "country": "Angola"
},
{
  "country": "Anguilla"
},
{
  "country": "Antarctica"
},
{
  "country": "Antigua and Barbuda"
},
{
  "country": "Argentina"
},
{
  "country": "Armenia"
},
{
  "country": "Aruba"
},
{
  "country": "Australia"
},
{
  "country": "Austria"
},
{
  "country": "Azerbaijan"
},
{
  "country": "Bahamas"
},
{
  "country": "Bahrain"
},
{
  "country": "Bangladesh"
},
{
  "country": "Barbados"
},
{
  "country": "Belarus"
},
{
  "country": "Belgium"
},
{
  "country": "Belize"
},
{
  "country": "Benin"
},
{
  "country": "Bermuda"
},
{
  "country": "Bhutan"
},
{
  "country": "Bolivia"
},
{
  "country": "Bosnia and Herzegovina"
},
{
  "country": "Botswana"
},
{
  "country": "Bouvet Island"
},
{
  "country": "Brazil"
},
{
  "country": "British Indian Ocean Territory"
},
{
  "country": "Brunei"
},
{
  "country": "Bulgaria"
},
{
  "country": "Burkina Faso"
},
{
  "country": "Burundi"
},
{
  "country": "Cambodia"}
  ]


  private tours :Tour[] = Array.apply(null, new Array(10)).map((_,idx)=> this.getRandomTour("Wycieczka " + idx));

}
