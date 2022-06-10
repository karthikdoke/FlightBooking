export interface IFlightDetails{
    flightNo:number;
    flightName:string;
    flightLogo:string;
    source:string;
    destination:string;
    startDateTime:string;
    endDateTime:string;
    sheduleDays:string;
    instrumentsUsed:string;
    totalNoOfBusinessClassSeats:number;
    totalNoOfNonBusinessClassSeats:number;
    onewayPrice:number;
    roundtripPrice:number;
    noOfRows:number;
    mealNonVeg:string;
    mealVeg:string;
}