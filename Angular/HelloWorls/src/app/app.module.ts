import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import 'hammerjs';
import 'mousetrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TourShortInfoComponent } from './tours/tour-short-info/tour-short-info.component';
import { TourListComponent } from './tours/tour-list/tour-list.component';
import { InformationComponent } from './information/information.component';
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import { NewTourComponent } from './new-tour/new-tour.component';
import { CartComponent } from './cart/cart.component';
import {HttpClientModule} from "@angular/common/http";
import { TourDateComponent } from './tour-date/tour-date.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {DbService} from "./services/db.service";
import {InMemoryWebApiModule} from "angular-in-memory-web-api";
import { CartMenuComponent } from './cart-menu/cart-menu.component';
import { PricePipe } from './pipes/price.pipe';
import { DatePipe } from './pipes/date.pipe';
import { DynamicPipe } from './pipes/dynamic.pipe';
import {PercentPipe} from "@angular/common";
import { FilterComponent } from './filter/filter.component';
import {Ng5SliderModule} from "ng5-slider";
import { RatePipe } from './pipes/rate.pipe';
import { CountryPipe } from './pipes/country.pipe';
import {AngularMultiSelectModule} from "angular2-multiselect-dropdown";
import { TourInfoComponent } from './tours/tour-info/tour-info.component';
import { CommentsComponent } from './comments/comments.component';
import {GalleryModule} from "@ks89/angular-modal-gallery";
import { TourBaseComponent } from './tours/tour-base/tour-base.component';

@NgModule({
  declarations: [
    AppComponent,
    TourShortInfoComponent,
    TourListComponent,
    InformationComponent,
    NewTourComponent,
    CartComponent,
    TourDateComponent,
    CartMenuComponent,
    PricePipe,
    DatePipe,
    DynamicPipe,
    FilterComponent,
    RatePipe,
    CountryPipe,
    TourInfoComponent,
    CommentsComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    Ng5SliderModule,
    AngularMultiSelectModule,
    GalleryModule.forRoot(),
    AppRoutingModule
  ],
  providers: [PricePipe,DatePipe,RatePipe,CountryPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
