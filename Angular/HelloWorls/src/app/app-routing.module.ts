import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TourShortInfoComponent} from "./tours/tour-short-info/tour-short-info.component";
import {TourListComponent} from "./tour-list/tour-list/tour-list.component";
import {NewTourComponent} from "./new-tour/new-tour.component";
import { CartComponent } from './cart/cart.component';
import {TourInfoComponent} from "./tours/tour-info/tour-info.component";
import {ClientListComponent} from "./tour-list/client-list/client-list.component";
import {AdminListComponent} from "./tour-list/admin-list/admin-list.component";
import {UserLoginComponent} from "./user-login/user-login.component";
import {UserRegisterComponent} from "./user-register/user-register.component";
import {UserAuthGuard} from "./services/user-auth.guard";
import {AdminGuard} from "./services/admin.guard";


const routes: Routes = [
  { path: 'tour-short-info/:_id', component: TourInfoComponent ,canActivate: [UserAuthGuard]},
  { path: '', component: ClientListComponent},
  { path: 'panel', component: AdminListComponent,canActivate: [AdminGuard]},
  { path: 'cart', component: CartComponent,canActivate: [UserAuthGuard] },
  { path: 'login', component: UserLoginComponent },
  { path: 'signup', component: UserRegisterComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
