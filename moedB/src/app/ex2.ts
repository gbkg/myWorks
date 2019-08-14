export class passanger{
    private ID:number;
    private FullName:string;
    private passportValid:date;
    private money:number;
    private flycard:flycard;

    constructor(ID, FullName, flycard, money, passportValid){
        this.ID=ID;
        this.FullName=FullName;
        this.flycard=flycard;
        this.money=money;
        this.passportValid=passportValid;
    }

    passCheck():boolean{
        if(this.passportValid.getMonth()-this.flycard.getDateFlight().getMonth()>=6){
            return true;
        }
        else{
            return false;
        }
    }

    enoughMoney(flycard){
        if(this.money>=this.flycard.getCost()){
            this.flycard=this.flycard;
        }
    }


}

export class flycard{
    private cardNumber:number;
    private flightNumber:number;
    private flightComp:string;
    private dest:string;
    private dateFlight:date;
    private dateArrive:date;
    private cost:number;

    constructor(cardNumber, flightNumber, flightComp, dest, dateFlight, dateArrive, cost){
        this.cardNumber=cardNumber;
        this.flightNumber=flightNumber;
        this.flightComp=flightComp;
        this.dest=dest;
        this.dateFlight=dateFlight;
        this.dateArrive=dateArrive;
        this.cost=cost;
    }

    getDateFlight():date{
        return this.dateFlight;
    }

    getCost():number{
        return this.cost;
    }

    flight(){
        if(this.dateArrive.getDay()>30 || this.dateArrive.getMonth()>12 || this.dateFlight.getDay()>30 || this.dateFlight.getMonth()>12){
            return false;
        }

        if(this.dateArrive.getYear()>this.dateFlight.getYear()){
            return true;
        }

        else if(this.dateArrive.getYear()==this.dateFlight.getYear()){
            if(this.dateArrive.getMonth()>this.dateFlight.getYear()){
                return true;
            }
            else if(this.dateArrive.getMonth()==this.dateFlight.getYear()){
                if(this.dateArrive.getDay()>this.dateFlight.getDay()){
                    return true;
                }
            }
        }
        else{
            return false;
        }
    }

}

export class date{
    private day:number;
    private month:number;
    private year:number;

    constructor(day, month, year){
        this.day=day;
        this.month=month;
        this.year=year;
    }

    getDay():number{
        return this.day;
    }

    getMonth():number{
        return this.month;
    }

    getYear():number{
        return this.year;
    }

    setDay():void{
        this.day++;
    }

    setMonth():void{
        this.month++;
    }

    setYear():void{
        this.year++;
    }

    updateDate():void{
        if(this.day>30){
            this.day=1;
            this.month++;
            if(this.month>12){
                this.year++;
            }
        }
    }
    
}

export class flight{
    private flightNumber:number;
    private pass:passanger[];
    private sitsPlace:number;
    private des:string;
    private flightDate:date;
    private arriveDate:date;

    constructor(flightNumber, sitsPlace, flightDate, arriveDate){
        this.sitsPlace=sitsPlace;
        this.flightNumber=flightNumber;
        this.flightDate=flightDate;
        this.arriveDate=arriveDate;
    }

    checkFlight(pass){

    }
}