import { Injectable } from '@angular/core';
import * as Rx from 'rxjs/Rx';
import {environment} from "../../environments/environment";
import * as Stomp from 'stompjs';
import * as SockJS from 'sockjs-client';
import {Socket} from "ngx-socket-io";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class WebsocketService {
  sale:Observable<Tour>= this.socket.fromEvent<Tour>('sale');


  constructor(private socket: Socket) {
    console.log("soket")
    this.sale.subscribe(r => console.log(r), error => console.log(error))
  }
}
