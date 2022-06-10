import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookingComponent } from './booking/booking.component';
import { FlightSearchComponent } from './flight-search/flight-search.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegistationComponent } from './registation/registation.component';
import { AdminComponent } from './admin/admin.component';
import { AddFlightComponent } from './add-flight/add-flight.component';
import { BlockFlightComponent } from './block-flight/block-flight.component';
import { AllFlightsComponent } from './all-flights/all-flights.component';

const routes: Routes = [
  {path:'',redirectTo:"/Home",pathMatch:"full"},
  {path:'Home',component:HomeComponent},
  {path:'Login',component:LoginComponent},
  {path:'Registation',component:RegistationComponent},
  {path:'Booking',component:BookingComponent},
  {path:'FlightSearch',component:FlightSearchComponent},
  {path:'Admin',component:AdminComponent,
children:
[{path:"",redirectTo:"/Admin/AddFlight",pathMatch:"full"},
  {path:"AddFlight",component:AddFlightComponent},
{path:"BlockFlight",component:BlockFlightComponent},
{path:"AllFlights",component:AllFlightsComponent}
]
},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
