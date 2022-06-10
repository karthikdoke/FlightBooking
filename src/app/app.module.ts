import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistationComponent } from './registation/registation.component';
import { LoginComponent } from './login/login.component';
import { BookingComponent } from './booking/booking.component';
import { FlightSearchComponent } from './flight-search/flight-search.component';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { AddFlightComponent } from './add-flight/add-flight.component';
import { BlockFlightComponent } from './block-flight/block-flight.component';
import { AllFlightsComponent } from './all-flights/all-flights.component';
import { AdminService } from './MyServices/admin.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    RegistationComponent,
    LoginComponent,
    BookingComponent,
    FlightSearchComponent,
    HomeComponent,
    AdminComponent,
    AddFlightComponent,
    BlockFlightComponent,
    AllFlightsComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,ReactiveFormsModule,
    FormsModule
  ],
  providers: [AdminService],
  bootstrap: [AppComponent]
})
export class AppModule { }
