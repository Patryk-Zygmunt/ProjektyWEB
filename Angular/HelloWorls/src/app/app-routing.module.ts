import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TableComponent} from "./table/table.component";
import {TourComponent} from "./tour/tour.component";
import {TourListComponent} from "./tour-list/tour-list.component";


const routes: Routes = [
  { path: 'table', component: TableComponent},
  { path: '', component: TourListComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
