import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TourShortInfoComponent} from "./tours/tour-short-info/tour-short-info.component";
import {TourListComponent} from "./tours/tour-list/tour-list.component";
import {NewTourComponent} from "./new-tour/new-tour.component";
import { CartComponent } from './cart/cart.component';
import {TourInfoComponent} from "./tours/tour-info/tour-info.component";


const routes: Routes = [
  { path: 'tour-short-info/:_id', component: TourInfoComponent},
  { path: '', component: TourListComponent },
  { path: 'cart', component: CartComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
