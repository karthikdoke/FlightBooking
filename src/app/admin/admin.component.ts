import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private router:Router,private activeRouter:ActivatedRoute) { }

  ngOnInit(): void {
  }
  public onAddFlightClick():void{
    this.router.navigate(["AddFlight"],{relativeTo:this.activeRouter});
  }
  public onBlockFlightClick():void{
    this.router.navigate(["BlockFlight"],{relativeTo:this.activeRouter});
  }
  public onAllFlightClick():void{
    this.router.navigate(["AllFlights"],{relativeTo:this.activeRouter} );
  }


}
