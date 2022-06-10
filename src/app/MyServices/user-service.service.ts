import { HttpClient,HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, observable,throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { IUser } from '../Models/IUser';


@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  public _url="http://localhost:18351/api/Registation/UserRegistation";
  public _url1="http://localhost:18351/api/Login/UserLogin"
  public _url2="http://localhost:10490/api/FlightSearch"
  public _url3="http://localhost:10490/api/Booking/UserDetails"

  constructor(private http:HttpClient) { }

  RegisterUser(data:any){
    const headers = new HttpHeaders({'content-type': 'application/json'});
    return this.http.post(this._url,data,{headers:headers});
  }
  // httpErrorHandler(error:HttpErrorResponse)
  // {
  //   return throwError(error.status||"Server Error");
  // }
  loginUser(data:any):Observable<any>{
    const headers = {'content-type':'application/json'}
   
    return this.http.post(this._url1,JSON.stringify(data),{'headers':headers});
  }

  public searchFlight(data:any):Observable<any>{
    const headers={'content-type':'application/json'}
    //var userInputObj= new userDetailsInput();
    // inputObj.AdminUn=data.username;
    // inputObj.AdminPassword=data.password;
      
    return this.http.get(this._url2
      +"/FSerchBySourceDestination?source="+data.source+"&destination="+data.destination,{'headers':headers})
    
    
    
  }
  TicketBooking(data:any){
    const headers = new HttpHeaders({'content-type': 'application/json'});
    return this.http.post(this._url3,data,{headers:headers});
  }


  
}
