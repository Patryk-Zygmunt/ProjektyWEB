import {Component, Input, OnInit} from '@angular/core';
@Component({
  selector: 'app-tour-list',
  templateUrl: './tour-list.component.html',
  styleUrls: ['./tour-list.component.css']
})
export class TourListComponent implements OnInit {

  reservation: any = 0;
  toursStyle :{tour:Tour,style:string}[] = [];

  constructor() { }

  ngOnInit() {

    this.toursStyle   = this.tours.map(t=>  ({tour:t, style:'text-info'}));
    let sorted   = this.toursStyle.sort((a,b)=>a.tour.price - b.tour.price);
   this.toursStyle.find(t=>sorted[0].tour.name === t.tour.name).style = 'text-danger';
   this.toursStyle.find(t=>sorted[sorted.length-1].tour.name === t.tour.name).style = 'text-success'
  }

  placesClass = ['btn', 'btn-info']
  reservationClass = ['btn','btn-success']
  resignationClass = ['btn','btn-danger']



  public change(p: number,i:number){
    this.toursStyle[i].tour.places  = this.toursStyle[i].tour.places + p
    this.placesAmountChanged(this.toursStyle[i].tour.places,this.toursStyle[i].tour.maxPlaces)
    this.reservation = this.reservation - p;
  }

  public placesAmountChanged(p: number, maxPlaces:number) {
    if (p <= 0) {
      this.placesClass[1] = 'btn-secondary'
      this.placesClass.push('disabled')
      this.reservationClass.push('disabled')
      this.reservationClass[1] = 'btn-secondary'
      this.resignationClass = ['btn', 'btn-danger']
    } else if (p < 3) {
      this.placesClass[1] = 'btn-warning'
      this.reservationClass = ['btn', 'btn-success']
      this.resignationClass = ['btn', 'btn-danger']
    } else if (p >= maxPlaces) {
      this.resignationClass.push('disabled')
      this.resignationClass[1] = 'btn-secondary'
      this.placesClass = ['btn', 'btn-info']
      this.reservationClass = ['btn', 'btn-success']
    } else {
      this.placesClass = ['btn', 'btn-info']
      this.reservationClass = ['btn', 'btn-success']
      this.resignationClass = ['btn', 'btn-danger']
    }
  }

 private tours :Tour[] = [
   this.getRandomTour("Super wycieczka"),
   this.getRandomTour("Super wycieczka1"),
   this.getRandomTour("Super wycieczka2"),

  ]

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



  public getRandomTour(name){
    let t:Tour  =   {
      name:name,
     // country:this.countries[Math.floor(Math.random() * (15 + 1))].country,
      description:"Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus\n" +
        "        odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla.\n" +
        "        Donec lacinia congue felis in faucibus.",
   //   imageUrl: this.images[Math.floor(Math.random() * 4)],
      price:Math.floor(Math.random() * (6000 - 1000 + 1) + 1000),
      maxPlaces:Math.floor(Math.random() * (60 - 5 + 1) + 5),
      start:new Date("2020-02-11"),
      end:new Date("2020-02-11"),
    } as Tour;
    t.places = t.maxPlaces;
    t.start.setDate(t.start.getDate() - Math.floor(Math.random() * (80 - 5 + 1) + 5))
    t.end.setDate(t.start.getDate() +  Math.floor(Math.random() * (20 - 5 + 1) + 5))
    return t;
  }




}
