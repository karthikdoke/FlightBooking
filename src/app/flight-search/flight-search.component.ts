import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IFlightSearch } from '../Models/IFlightSearch';
import { UserServiceService } from '../MyServices/user-service.service';

@Component({
  selector: 'app-flight-search',
  templateUrl: './flight-search.component.html',
  styleUrls: ['./flight-search.component.css']
})
export class FlightSearchComponent implements OnInit {
  public flightList:IFlightSearch[]=[];
  public serachFlightForm:FormGroup;

  constructor(private UserService:UserServiceService,
    private formBuilder:FormBuilder,private router:Router,private activateRouter:ActivatedRoute) 
    {
      this.serachFlightForm= new FormGroup({
        source:new FormControl(),
        destination:new FormControl(),
      });

     }

  ngOnInit(): void {
  }

  
  public SearchFlightClick(data:any){
    this.UserService.searchFlight(data)
          .subscribe(res=>{
            this.flightList=res
            // alert(res+" register successfull");
          console.log("There are all details",res);
          // this.router.navigate(['userdashboard/userlogin']);
          // if(window.sessionStorage.getItem("LogSuccess") != null)
          //  {
          //      this.router.navigate(['admindashboard']);
          //      // .then(()=>{
          //      //   window.location.reload();
          //      // });
          //  }else
          //  {
          //    this.router.navigate(['adminlogin'])
          //    .then(()=>{
          //      window.location.reload();
          //    })
          //  }
          
        //  },
        //   error=>{
        //     alert(error);
        //     this.router.navigate(['/adminlogin'])
        //     .then(()=>{
        //       window.location.reload();
        //     })
           });
    }
  


  //bookInfo method

  public bookInfo(flightNo:any):void{
     window.sessionStorage.setItem("flightNo",flightNo);
     
     this.router.navigate(['userdashboard/flightbook']);
  }
}