import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TourShortInfoComponent} from "./tours/tour-short-info/tour-short-info.component";
import {TourListComponent} from "./tour-list/tour-list/tour-list.component";
import {NewTourComponent} from "./new-tour/new-tour.component";
import { CartComponent } from './cart/cart.component';
import {TourInfoComponent} from "./tours/tour-info/tour-info.component";
import {ClientListComponent} from "./tour-list/client-list/client-list.component";
import {AdminListComponent} from "./tour-list/admin-list/admin-list.component";


const routes: Routes = [
  { path: 'tour-short-info/:_id', component: TourInfoComponent},
  { path: '', component: ClientListComponent},
  { path: 'panel', component: AdminListComponent},
  { path: 'cart', component: CartComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
