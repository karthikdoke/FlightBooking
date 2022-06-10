import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserServiceService } from '../MyServices/user-service.service';

@Component({
  selector: 'app-registation',
  templateUrl: './registation.component.html',
  styleUrls: ['./registation.component.css']
})
export class RegistationComponent implements OnInit {
  public AddUser:FormGroup;

  constructor(private UserService:UserServiceService,
    private router:Router) { 
      this.AddUser = new FormGroup({
        UserName: new FormControl('',Validators.required),
        Email: new FormControl('',Validators.required),
        Password: new FormControl('',Validators.required),
        PhoneNumber: new FormControl(Validators.required),
        Gender: new FormControl('',Validators.required),
        Age: new FormControl(Validators.required),
        Addresss: new FormControl('',Validators.required),
      });
  }

  ngOnInit(): void {
  }
  registerUser(data:any){
    this.UserService.RegisterUser(data).subscribe((res:any) => {console.log(res)  
        if(res == 1)
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
