import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TableComponent } from './table/table.component';
import { TourComponent } from './tour/tour.component';
import { TourListComponent } from './tour-list/tour-list.component';
import { InformationComponent } from './information/information.component';
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import { NewTourComponent } from './new-tour/new-tour.component';
import { CartComponent } from './cart/cart.component';
import {HttpClientModule} from "@angular/common/http";
import { TourDateComponent } from './tour-date/tour-date.component';

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    TourComponent,
    TourListComponent,
    InformationComponent,
    NewTourComponent,
    CartComponent,
    TourDateComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
