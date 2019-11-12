import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TableComponent } from './table/table.component';
import { TourComponent } from './tour/tour.component';
import { TourListComponent } from './tour-list/tour-list.component';

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    TourComponent,
    TourListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
