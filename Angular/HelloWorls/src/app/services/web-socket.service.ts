import { Injectable } from '@angular/core';
import * as Rx from 'rxjs/Rx';
import {environment} from "../../environments/environment";
import * as Stomp from 'stompjs';
import * as SockJS from 'sockjs-client';

@Injectable({
  providedIn: 'root'
})
export class WebsocketService {

  ws: any;
  url =  environment.server_url

  constructor() {
    this.connect();
  }

  private subject: Rx.Subject<MessageEvent>;

  public connectToSocket(url): Rx.Subject<MessageEvent> {
    if (!this.subject) {
      this.subject = this.create(url);
      console.log("Successfully connected: " + url);
    }
    return this.subject;
  }


  private create(url): Rx.Subject<MessageEvent> {
    let ws = new WebSocket(url);

    let observable = Rx.Observable.create(
      (obs: Rx.Observer<MessageEvent>) => {
        ws.onmessage = obs.next.bind(obs);
        ws.onerror = obs.error.bind(obs);
        ws.onclose = obs.complete.bind(obs);
        return ws.close.bind(ws);
      })
    let observer = {
      next: (data: Object) => {
        if (ws.readyState === WebSocket.OPEN) {
          // ws.send(JSON.stringify(data));
        }
      }
    }
    return Rx.Subject.create(observer, observable);
  }



  connect() {
    //connect to stomp where stomp endpoint is exposed
   let socket = new SockJS(this.url);
   // let socket = new WebSocket(this.url);
    this.ws = Stomp.over(socket);
    let that = this;
    this.ws.connect({}, function(frame) {
      that.ws.subscribe("/errors", function(message) {
        console.log("Error " + message.body);
      });
      that.ws.subscribe('sale', function(state) {
        console.log(state)

      });
    }, function(error) {
      console.log("STOMP error " + error);
    });
  }
}
