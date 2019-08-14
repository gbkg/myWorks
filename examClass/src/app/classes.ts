export class Person{

    private userName:string;
    private win:number;
    private lose:number;
    private games:number;
    private cards:Card[];

    constructor(userName ){
        this.userName = userName;
        this.lose = 0;
        this.win =0;
        this.games = 0
        this.cards = new Array();
    }

    getUserName():string{
        return this.userName;
    }

    getWin():number{
        return this.win;
    }

    getLose():number{
        return this.lose;
    }

    getGames():number{
        return this.games;
    }

    addWin():void{
        this.win++;
        this.games++;
    }

    addLose():void{
        this.lose++;
        this.games++;
    }

    getCards():Card[]{
        return this.cards;
    }


    addCard(card):void{
        this.cards.push(card);
    }




}

export class Card{
    private value:number;

    constructor(value){
        this.value = value;
    }

    getValue():number{
        return this.value;
    }
}