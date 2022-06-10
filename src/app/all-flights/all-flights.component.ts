import { Component, OnInit } from '@angular/core';
import { IFlightDetails } from '../Models/IFlightDetails';
import { AdminService } from '../MyServices/admin.service';

@Component({
  selector: 'app-all-flights',
  templateUrl: './all-flights.component.html',
  styleUrls: ['./all-flights.component.css']
})
export class AllFlightsComponent implements OnInit {
  
  public Flightdetails: IFlightDetails[]=[];
  constructor(private Adminservice:AdminService) { 
    
  }

  ngOnInit(): void {  this.Adminservice.GetAllAirlines().subscribe((data: any)=>{this.Flightdetails=data;
   console.log("These are al Details",data);
   });
   
  }
  
  public onDeleteClick(FlightNo:number):void{
    
  }

}
