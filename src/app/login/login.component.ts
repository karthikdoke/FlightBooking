import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserServiceService } from '../MyServices/user-service.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public Login:FormGroup;


  constructor(private service:UserServiceService, private router:Router) {
      this.Login=new FormGroup({
        UserName:new FormControl(),
        password:new FormControl()

      });
      
     }

  ngOnInit(): void {
  }
  public UserLogin(data:any){
    debugger
    
    this.service.loginUser(data).subscribe((res:any) => {console.log(res)  
      if(res.success == 1){
        alert("Login Successful");
        localStorage.setItem('token',res.token);
       
        this.router.navigate(["./Booking"]);
      }
    },(error:HttpErrorResponse)=>{
      alert("Please check your Credentials");
      this.router.navigate(['./login']);
    })

  }

 
}
