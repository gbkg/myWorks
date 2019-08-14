export class coin{
    private kind:string;
    private value:number;

    constructor(kind, value){
        this.kind=kind;
        this.value=value;
    }

    getKind():string{
        return this.kind;
    }
    gerValue():number{
        return this.value;
    }

    setValue(newValue):void{
        this.value=newValue;
    }

}

export class exchangeList{
    private timesOfEx:number;
    private fromTo:string;
    private valueFrom:number;
    private valueTo:number

    constructor(timesOfEx, fromTo, valueFrom, valueTo){
        this.fromTo=fromTo;
        this.valueFrom=valueFrom;
        this.valueTo=valueTo
        this.timesOfEx=timesOfEx;
    }

    getFromTo():string{
        return this.fromTo;
    }

    getValueFrom():number{
        return this.valueFrom;
    }

    getValueTo():number{
        return this.valueTo;
    }

    getTimesOfEx():number{
        return this.timesOfEx;
    }
}