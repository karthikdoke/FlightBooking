import { Injectable } from '@angular/core';
import{HttpClient ,HttpHeaders} from '@angular/common/http';
import { Observable, observable } from 'rxjs';
import { IFlightDetails } from '../Models/IFlightDetails';


@Injectable({
  providedIn: 'root'
})
export class AdminService {
  InsertUser(value: any) {
    throw new Error('Method not implemented.');
  }
  public _Url="http://localhost:31456/api/AddFlight"
  
  
  

  constructor(private http:HttpClient) { 

  }
  public GetAllAirlines():Observable<IFlightDetails[]>
  {
    return this.http.get<IFlightDetails[]>(this._Url+"/AllFlightDetails");
  }
  AddAirLine(data:any){
    const headers = new HttpHeaders({'content-type': 'application/json'});
    return this.http.post(this._Url+"/InsertFlight",data,{headers:headers});
  }
  
}


