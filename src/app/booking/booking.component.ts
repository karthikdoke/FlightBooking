import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { UserServiceService } from '../MyServices/user-service.service';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {
  public Booking:FormGroup;

  constructor(private UserService:UserServiceService,
    private router:Router) {
      this.Booking=new FormGroup({
       
        userName: new FormControl('',Validators.required),
        uEmail: new FormControl('',Validators.required),
        passName: new FormControl('',Validators.required),
        passAge: new FormControl('',Validators.required),
        veg: new FormControl('',Validators.required),
        nonVeg: new FormControl('',Validators.required),
        selectsSeats: new FormControl('',Validators.required),
        PNR: new FormControl('',Validators.required),
        Source: new FormControl('',Validators.required),
        Destination: new FormControl('',Validators.required),
       

      });
     }

  ngOnInit(): void {
   
  }
   UserBooking(data:any){
    this.UserService.TicketBooking(data).subscribe((res:any) => {console.log(res)  
        if(res == 1)
          alert("Ticked Booked");
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


