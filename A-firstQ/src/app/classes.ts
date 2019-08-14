export class worker{
    private IDW:string;
    private fullName:string;
    private forklift:boolean;
    private visits:number;
    private numberOP:number;

    constructor(IDW, fullName, forklift){
        this.IDW=IDW;
        this.fullName=fullName;
        this.forklift = forklift;
        this.visits=0;
        this.numberOP=0;
    }

    getID():string{
        return this.IDW;
    }

    getFullName():string{
        return this.fullName;
    }
    getForklift():boolean{
        return this.forklift;
    }

    getVisits():number{
        return this.visits;
    }

    setVisits(){
        this.visits++;
    }

    getNumberOP():number{
        return this.numberOP;
    }

    setNumberOP(){
        this.numberOP++;
    }

}


export class product{
    private IDP:number;
    private productName:string;
    private forkliftNeed:boolean;
    private inPlace:boolean;

    constructor(IDP, productName, forkliftNeed){
        this.IDP = IDP;
        this.forkliftNeed = forkliftNeed;
        this.inPlace = false;
        this.productName = productName;
    }

    getIDP():number{
        return this.IDP;
    }

    getForkliftNeed():boolean{
        return this.forkliftNeed;
    }

    getProductName():string{
        return this.productName;
    }

    getInPlace():boolean{
        return this.inPlace;
    }

    setInPlace(){
        this.inPlace = !this.inPlace;
    }

}