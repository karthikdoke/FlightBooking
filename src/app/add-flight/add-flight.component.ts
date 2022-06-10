import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminService } from '../MyServices/admin.service';

@Component({
  selector: 'app-add-flight',
  templateUrl: './add-flight.component.html',
  styleUrls: ['./add-flight.component.css']
})
export class AddFlightComponent implements OnInit {
  public AddFlight:FormGroup;

  constructor(private adminservice:AdminService,private router:Router) {
    this.AddFlight=new FormGroup({
       flightName:new FormControl,
      source:new FormControl,
      Destination:new FormControl,
      startDateTime:new FormControl,
      endDateTime:new FormControl,
      sheduleDays:new FormControl,
      instrumentsUsed:new FormControl,
      totalNoOfBusinessClassSeats:new FormControl,
      totalNoOfNonBusinessClassSeats:new FormControl,
      onewayPrice:new FormControl,
      roundtripPrice:new FormControl,
      noOfRows:new FormControl,
      mealNonVeg:new FormControl,
      mealVeg:new FormControl,


    });
   }

  ngOnInit(): void {
  }
  AddAiroplane(data:any){
    this.adminservice.AddAirLine(data).subscribe((res:any) => {console.log(res)  
        if(res ==1)
        //this.router.navigate(["/Home"])
          alert("success");
          else{
alert("failure");
          }
      // },(error:HttpErrorResponse)=>{
      //   alert("Please enter proper details");
      //   this.router.navigate(['./register']);
      }
    );
  
     
  }
  public onCancelClick():void{
    this.router.navigate(["/Home"]);
  }

}
