export class bodyShape{
    private height: number;
    private skinColor: string;
    private chest: number;
    private weist: number;
    private thigh: number;

    constructor( height, skinColor, chest, weist, thigh){
        this.height = height;
        this.skinColor = skinColor;
        this.chest = chest;
        this.weist = weist;
        this.thigh = thigh;
    }

    getHeight():number{
        return this.height;
    }

    setHeight(newHeight):void{
        this.height = newHeight;
    }

    getSkinColor():string{
        return this.skinColor;
    }

    setSkinColor(newSkin){
        this.skinColor = newSkin;
    }

    getChaest():number{
        return this.chest;
    }

    setCheast(newChest){
        this.chest = newChest;
    }

    getWeist():number{
        return this.weist;
    }

    setWeist(newWeist){
        this.weist = newWeist;
    }

    getThigh():number{
        return this.thigh;
    }

    setThigh(newThigh){
        this.thigh = newThigh;
    }
}

export class approximateBodyShape{
    
    private style1: string;
    private style2: string;
    private height: number;
    private skinColor: string;


    constructor(style1, style2, height, skinColor){
        this.style1 = style1;
        this.style2 = style2;
        this.height = height;
        this.skinColor = skinColor;
    }

    getStyle1():string{
        return this.style1;
    }

    setStyle1(style1){
        this.style1 = style1;
    }

    getStyle2():string{
        return this.style2;
    }

    setStyle2(style2){
        this.style2 = style2;
    }

    getHeight():number{
        return this.height;
    }

    setHeight(height){
        this.height = height;
    }

    getSkinColor():string{
        return this.skinColor;
    }

    setSkinColor(skinColor){
        this.skinColor = skinColor;
    }
}


export class account{
    private shape: bodyShape;
    private approximateShape: approximateBodyShape;
    private friendShape: bodyShape;
    private friendApproximateShape: approximateBodyShape;
    private fName: string;
    private lName:string;
    private pass:string;
    private email:string;
    private myStyles:string[];
    private myCart: cart[];


    private height:number;
    private skinColor:string;
    private chest:number;
    private weist:number;
    private thigh:number;
    private style1:string;
    private style2:string;

    constructor(fName, lName, pass, email){
        this.fName = fName;
        this.lName = lName;
        this.pass = pass;
        this.email = email;
        this.myStyles = [];
        this.shape = new bodyShape(this.height, this.skinColor, this.chest, this.weist, this.thigh);
        this.approximateShape = new approximateBodyShape(this.style1, this.style2, this.height, this.skinColor);
        this.friendShape = new bodyShape(this.height, this.skinColor, this.chest, this.weist, this.thigh);
        this.friendApproximateShape = new approximateBodyShape(this.style1, this.style2, this.height, this.skinColor);
        this.myCart = new Array();
    }

    setMyCart(color, size, barcode, pic, Qty, money){
        this.myCart.push(new cart(color, size, barcode, pic, Qty, money));
    }

    getMyCart():cart[]{
        return this.myCart;
    }

    zeroCart(){
        this.myCart = [];
    }

    setStyle(newStyle):void{
        this.myStyles = newStyle;
    }

    getShape():bodyShape{
        return this.shape;
    }

    setShape(cheast, height, skin, thigh, waist){
        this.shape.setCheast(cheast);
        this.shape.setHeight(height);
        this.shape.setSkinColor(skin);
        this.shape.setThigh(thigh);
        this.shape.setWeist(waist);
    }

    getFriendShape():bodyShape{
        return this.friendShape;
    }

    setFriendShape(cheast, height, skin, thigh, waist){
        this.friendShape.setCheast(cheast);
        this.friendShape.setHeight(height);
        this.friendShape.setSkinColor(skin);
        this.friendShape.setThigh(thigh);
        this.friendShape.setWeist(waist);
    }

    getApproximateShape():approximateBodyShape{
        return this.approximateShape;
    }

    setApproximateShape(height, skin, style1, style2){
        this.approximateShape.setHeight(height);
        this.approximateShape.setSkinColor(skin);
        this.approximateShape.setStyle1(style1);
        this.approximateShape.setStyle2(style2);
    }

    getFriendApproximateShape():approximateBodyShape{
        return this.friendApproximateShape;
    }

    setFriendApproximateShape(height, skin, style1, style2){
        this.friendApproximateShape.setHeight(height);
        this.friendApproximateShape.setSkinColor(skin);
        this.friendApproximateShape.setStyle1(style1);
        this.friendApproximateShape.setStyle2(style2);
    }

    setFName(newFName){
        this.fName = newFName;
    }

    setLName(newLName){
        this.lName = newLName;
    }

    setEmail(newEmail){
        this.email = newEmail;
    }

    setPass(newPass){
        this.pass = newPass;
    }

    getFName():string{
        return this.fName;
    }

    getLName():string{
        return this.lName;
    }

    getEmail():string{
        return this.email;
    }

    getPass():string{
        return this.pass;
    }
}


export class clothsPar {
    private bodyType: string;
    private season: string;
    private type:string;
    private price:number;
    private barcode:string;
    private colorCloth: clothColor[];
    private myCart: cart;
    private restoreCart: cart[];

    private newColor:string;
    private newSize:string;
    private newPic:string;
    private Qty:number;
    private money:number;

    constructor(bodyType, season, type, price, barcode){
        this.bodyType = bodyType;
        this.season = season;
        this.type = type;
        this.price = price;
        this.Qty = 1;
        this.barcode = barcode;
        this.colorCloth = new Array();
        this.myCart = new cart(this.newColor, this.newSize, this.barcode, this.newPic, this.Qty, this.money);
        this.restoreCart = new Array();
    }

    getQty():number{
        return this.Qty;
    }

    setQty(add){
        this.Qty += add;
        if(this.Qty<1){
            this.Qty =1;
        }
    }

    getMyCart():cart{
        return this.myCart;
    }

    setMyCart(color, pic, size, qty,barcode, money){
this.restoreCart.push(new cart(color, size, barcode, pic, qty, money));
    }



    setColorCloth(newColor: string, newColorpic: string, newClothPic: string[], sizes: string[]):void{
        this.colorCloth.push(new clothColor(newColor, newColorpic, newClothPic, sizes));
    }

    getColorCloth():clothColor[]{
        return this.colorCloth;
    }

    getPrice():number{
        return this.price;
    }

    getType():string{
        return this.type;
    }

    getBarcode():string{
        return this.barcode;
    }

    getBodyType():string{
        return this.bodyType;
    }

    getSeason():string{
        return this.season;
    }






}

export class cart{
    private color: string;
    private size: string;
    private barcode: string;
    private pic: string;
    private Qty: number;
    private money: number;

    constructor(color, size, barcode, pic, Qty, money){
        this.color = color;
        this.size = size;
        this.barcode = barcode;
        this.pic = pic;
        this.Qty = Qty;
        this.money = money;
    }

    getMoney():number{
        return this.money;
    }

    setMoney(){
        this.money = this.money;
    }

    getQty():number{
        return this.Qty;
    }

    setQty(Qty){
        this.Qty = Qty;
    }

    getColor():string{
        return this.color;
    }

    getSize():string{
        return this.size;
    }

    getPic():string{
        return this.pic;
    }

    setPic(newPic){
        this.pic =newPic;
    }

    getBarcode():string{
        return this.barcode;
    }

    setSize(newSize){
        this.size = newSize;
    }

    setColor(newColor){
        this.color = newColor;
    }
}

export class clothColor{
    private color: string;
    private colorPic: string;
    private clothPic: string[];
    private sizes: string[];

    constructor(color, colorPic, clothPic, sizes){
        this.color = color;
        this.colorPic = colorPic;
        this.clothPic = clothPic;
        this.sizes = sizes;
    }

    getColor():string{
        return this.color;
    }

    getColorPic():string{
        return this.colorPic;
    }

    getClothPic():string[]{
        return this.clothPic;
    }

    getSizes():string[]{
        return this.sizes;
    }

    setColor(color):void{
        this.color = color;
    }

    setColorPic(colorPic){
        this.colorPic = colorPic;
    }

    setClothPic(clothPic):void{
        this.clothPic.push(clothPic);
    }

    setSizes(clothSize):void{
        this.sizes.push(clothSize);
    }
}


