import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import 'hammerjs';
import 'mousetrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TourShortInfoComponent } from './tours/tour-short-info/tour-short-info.component';
import { TourListComponent } from './tour-list/tour-list/tour-list.component';
import { InformationComponent } from './information/information.component';
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import { NewTourComponent } from './new-tour/new-tour.component';
import { CartComponent } from './cart/cart.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
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
import {environment} from "../environments/environment";
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireModule } from 'angularfire2';
import { AuthComponent } from './auth/auth.component';

import { AdminListComponent } from './tour-list/admin-list/admin-list.component';
import { ClientListComponent } from './tour-list/client-list/client-list.component';
import { AdminTourComponent } from './tours/admin-tour/admin-tour.component';
import {EditTourComponent} from "./edit-tour/edit-tour.component";
import { CartTourComponent } from './tours/cart-tour/cart-tour.component';
import { NavbarComponent } from './navbar/navbar.component';
import {UserRegisterComponent} from "./user-register/user-register.component";
import {UserLoginComponent} from "./user-login/user-login.component";
import {TokenInterceptorService} from "./services/token-interceptor.service";
import { NamePipePipe } from './pipes/name-pipe.pipe';
import {SocketIoConfig, SocketIoModule} from "ngx-socket-io";


const config: SocketIoConfig = { url:environment.server_url, options: {} };


@NgModule({
  declarations: [
    AppComponent,
    TourShortInfoComponent,
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
    AdminListComponent,
    ClientListComponent,
    AdminTourComponent,
    EditTourComponent,
    AuthComponent,
    CartTourComponent,
    NavbarComponent,
    UserRegisterComponent,
    UserLoginComponent,
    NamePipePipe
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
    SocketIoModule.forRoot(config),

    AppRoutingModule
  ],
  providers: [PricePipe, DatePipe, RatePipe, CountryPipe,NamePipePipe,
  {
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptorService,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
