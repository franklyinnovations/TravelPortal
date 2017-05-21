export class User {
    id: number;
    username: string;
    password: string;
    firstName: string;
    lastName: string;
}
// *************** API *************************
export interface ISegment
{
    fare : IPassengerFare;
    id : string;
    flight_num : number;
    startDate : string ;
    endDate : string;
    origin : string;
    destination : string;
}

export interface IFare
{
    currencyType : string;
    fareBasisCode : string;
    fareClass : string;
    FSC : number;
    BaseFare : number;
}

export interface IPassengerFare
{
    childFare : IFare;
    adultFare : IFare;
    infantFare : IFare;
}

export class PassengerFare implements IPassengerFare
{
    childFare: IFare;
    adultFare: IFare;
    infantFare: IFare;

}
export class Sector
{
    constructor() {}
    AddSegments (segments : ISegment[]):void{}
    AddSegment(segment : ISegment):void{}
    GetFare():string{ return ""; }
    Origin():string {return "";}
    Destination(): string{ return "";}
    StartDate():string{return "";}
    EndDate():string{return "";}
    TotalDuration(): string{return "";}
    TotalFare():string{return "";}
}

enum PassengerType{
  Adult,
  Child,
  Infant
}
//******************* API Ends **************/


export class SearchPassenger
{
    constructor(type : PassengerType, number : number) {
    this.PaxType = type;
    this.PaxNumber = number;
    }
    PaxType : PassengerType;
    PaxNumber : number;
}

export class FlightItinerary 
{
//Sector, No of Passenger and fare.
  ItinerarySector : Sector;
   constructor(sector : Sector) {
      this.ItinerarySector = sector;
  }  
 GetTotalFare() : IPassengerFare{
     return new PassengerFare();
 }
}


//Search
export class Search
{
    origin : string;
    destination : string;
    startDate : string ;
    endDate? : string;
    passengers : SearchPassenger[];
}

export class ReservationItinerary
{
    FlightItinerary : FlightItinerary;
    Passenger : Passenger[];
}

export class Passenger implements IPassengerDetail{
    title: string;
    id: string;
    passengerType: PassengerType;
    firstname: string;
    middlename: string;
    lastname: string;
    issueDate: string;
    expiryDate: string;
    issueCountry: string;
}

export interface IPassengerDetail extends IPassportDetail
{
    id:string;
    title : string;
    firstname:string;
    middlename : string;
    lastname : string;
    passengerType : PassengerType;
}

export interface IPassportDetail{
    issueDate: string;
    expiryDate : string;
    issueCountry: string;
}


// **************** Pricing Service *********************
export class FareQuoteService
{
    //Call the GDS Service and return fare for each passenger type.
   GetFareByFareBasisCode(fareBasisCode : string):IFare[]{
        return null;
    }
    AddAgentCommission(): IFare[]{
       return this.GetFareByFareBasisCode("");
       
    }
}