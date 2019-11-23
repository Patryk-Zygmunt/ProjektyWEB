import { Injectable } from '@angular/core';
import {InMemoryDbService} from "angular-in-memory-web-api";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DbService implements InMemoryDbService {

  constructor() {
  }

  createDb = () => {
    let toursData = [{
      "name": "Wycieczka 0",
      "country": "Angola",
      "description": "Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus\n        odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla.\n        Donec lacinia congue felis in faucibus.",
      "imageUrl": "https://i.content4travel.com/cms/img/u/desktop/prodsliderphoto/xsomale_0.jpg?version=89?version=1",
      "price": 5912,
      "maxPlaces": 53,
      "start": "2020-01-28T00:00:00.000Z",
      "end": "2020-03-15T00:00:00.000Z",
      "places": 53,
      "rate": 0,
      "rateAmount": 0
    }, {
      "name": "Wycieczka 1",
      "country": "Bahamas",
      "description": "Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus\n        odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla.\n        Donec lacinia congue felis in faucibus.",
      "imageUrl": "https://i.content4travel.com/cms/img/u/desktop/prodsliderphoto/xsomale_0.jpg?version=89?version=1",
      "price": 5871,
      "maxPlaces": 40,
      "start": "2019-12-24T00:00:00.000Z",
      "end": "2020-03-08T00:00:00.000Z",
      "places": 40,
      "rate": 0,
      "rateAmount": 0
    }, {
      "name": "Wycieczka 2",
      "country": "Afghanistan",
      "description": "Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus\n        odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla.\n        Donec lacinia congue felis in faucibus.",
      "imageUrl": "https://i.content4travel.com/cms/img/u/desktop/se/xczjarm_0.jpg?version=180501-12?version=1",
      "price": 3090,
      "maxPlaces": 17,
      "start": "2020-01-04T00:00:00.000Z",
      "end": "2020-02-15T00:00:00.000Z",
      "places": 17,
      "rate": 0,
      "rateAmount": 0
    }, {
      "name": "Wycieczka 3",
      "country": "Benin",
      "description": "Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus\n        odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla.\n        Donec lacinia congue felis in faucibus.",
      "imageUrl": "https://i.content4travel.com/cms/img/u/desktop/prodsliderphoto/hrgpyra_0.jpg?version=190528-10?version=1",
      "price": 3411,
      "maxPlaces": 18,
      "start": "2020-01-05T00:00:00.000Z",
      "end": "2020-02-25T00:00:00.000Z",
      "places": 18,
      "rate": 0,
      "rateAmount": 0
    }, {
      "name": "Wycieczka 4",
      "country": "Belarus",
      "description": "Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus\n        odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla.\n        Donec lacinia congue felis in faucibus.",
      "imageUrl": "https://i.content4travel.com/cms/img/u/desktop/prodsliderphoto/xczprah_0.jpg?version=180831-12?version=1",
      "price": 3801,
      "maxPlaces": 55,
      "start": "2020-01-30T00:00:00.000Z",
      "end": "2020-03-07T00:00:00.000Z",
      "places": 55,
      "rate": 0,
      "rateAmount": 0
    }, {
      "name": "Wycieczka 5",
      "country": "Afghanistan",
      "description": "Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus\n        odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla.\n        Donec lacinia congue felis in faucibus.",
      "imageUrl": "https://i.content4travel.com/cms/img/u/desktop/se/xczjarm_0.jpg?version=180501-12?version=1",
      "price": 2051,
      "maxPlaces": 45,
      "start": "2019-12-19T00:00:00.000Z",
      "end": "2020-03-09T00:00:00.000Z",
      "places": 45,
      "rate": 0,
      "rateAmount": 0
    }, {
      "name": "Wycieczka 6",
      "country": "Benin",
      "description": "Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus\n        odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla.\n        Donec lacinia congue felis in faucibus.",
      "imageUrl": "https://i.content4travel.com/cms/img/u/desktop/prodsliderphoto/xsomale_0.jpg?version=89?version=1",
      "price": 5098,
      "maxPlaces": 42,
      "start": "2019-12-04T00:00:00.000Z",
      "end": "2020-02-13T00:00:00.000Z",
      "places": 42,
      "rate": 0,
      "rateAmount": 0
    }, {
      "name": "Wycieczka 7",
      "country": "American Samoa",
      "description": "Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus\n        odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla.\n        Donec lacinia congue felis in faucibus.",
      "imageUrl": "https://i.content4travel.com/cms/img/u/desktop/prodsliderphoto/xczprah_0.jpg?version=180831-12?version=1",
      "price": 4471,
      "maxPlaces": 47,
      "start": "2019-12-17T00:00:00.000Z",
      "end": "2020-02-29T00:00:00.000Z",
      "places": 47,
      "rate": 0,
      "rateAmount": 0
    }, {
      "name": "Wycieczka 8",
      "country": "American Samoa",
      "description": "Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus\n        odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla.\n        Donec lacinia congue felis in faucibus.",
      "imageUrl": "https://i.content4travel.com/cms/img/u/desktop/prodsliderphoto/xczprah_0.jpg?version=180831-12?version=1",
      "price": 5106,
      "maxPlaces": 52,
      "start": "2019-12-05T00:00:00.000Z",
      "end": "2020-02-12T00:00:00.000Z",
      "places": 52,
      "rate": 0,
      "rateAmount": 0
    }, {
      "name": "Wycieczka 9",
      "country": "Bahrain",
      "description": "Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus\n        odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla.\n        Donec lacinia congue felis in faucibus.",
      "imageUrl": "https://i.content4travel.com/cms/img/u/desktop/prodsliderphoto/xczprah_0.jpg?version=180831-12?version=1",
      "price": 4334,
      "maxPlaces": 28,
      "start": "2020-01-20T00:00:00.000Z",
      "end": "2020-02-25T00:00:00.000Z",
      "places": 28,
      "rate": 0,
      "rateAmount": 0
    }];

   let tours =  toursData.map((t, idx) => {
      return {...t, id: idx}
    })
    return{tours}
  }
}
