import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from './MyServices/admin.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  
  // constructor(private router:Router, private Adminservice:AdminService)
  constructor(private router:Router)
{

}  
ngOnInit():void{
  // this.Adminservice.GetAllAirlines().subscribe((data: any)=>{this._Flightdetails=data;
  // console.log("These are al Details",data);
// });


}
public onHomeClick():void
{
  this.router.navigate(["Home"]);
}
public onLogInClick():void
{
  this.router.navigate(["Login"]);
}
public onRegisterClick():void
{
  this.router.navigate(["Registation"]);
}
public onBookingClick():void
{
  this.router.navigate(["Booking"]);
}
public onFlightSearch():void
{
  this.router.navigate(["FlightSearch"]);
}
public onAdminClick():void
{
  this.router.navigate(["Admin"]);
}
}


