import { Injectable } from '@angular/core';
import { clothsPar } from './classes';

@Injectable({
  providedIn: 'root'
})
export class ClothStockService {
  clothStock: clothsPar[] = new Array();
  choosenCloth: clothsPar[] = new Array();
  categories: string[];
  flag:boolean;
  showDetailCloth: clothsPar;

  clothSize:string[][];
  clothPic:string[][];

  leftSide: clothsPar[];
  centerSide: clothsPar[];
  rightSide: clothsPar[];
  fullLeft: boolean;
  fullCenter: boolean;
  fullRight: boolean;

  constructor() { 
    this.categories = [];
    this.clothSize = [];
    this.clothPic = [];

    this.centerSide = new Array();
    this.rightSide = new Array();
    this.leftSide = new Array();
    this.fullCenter = true;
    this.fullLeft = true;
    this.fullRight = true;
  }

  stock(){
    if(this.clothStock.length != 0){
      this.clothStock = [];
      }
      this.clothStock.push(new clothsPar('all', 'winter', 'שמלה', 199, '6510141'));
      let sizesCloth1 = ['36', '38', '40', '42', '44'];

      let navyCloth1 = ['https://d356cpcjxoolwe.cloudfront.net/media/catalog/product/cache/3/image/373x485/72b4a3c89279b6295f5413414e9ad668/6/5/6510141.01.2100_7130cb4.jpg',
                          'https://d356cpcjxoolwe.cloudfront.net/media/catalog/product/cache/3/image/373x485/72b4a3c89279b6295f5413414e9ad668/6/5/6510141.01.2100_d_3acaf72.jpg',
                          'https://d356cpcjxoolwe.cloudfront.net/media/catalog/product/cache/3/image/373x485/72b4a3c89279b6295f5413414e9ad668/6/5/6510141.01.2100_d1_7b2fdbe.jpg',
                          'https://d356cpcjxoolwe.cloudfront.net/media/catalog/product/cache/3/image/373x485/72b4a3c89279b6295f5413414e9ad668/6/5/6510141.01.2100_d2_8694451.jpg'];

      this.clothStock[0].setColorCloth('navy', 'https://d356cpcjxoolwe.cloudfront.net/media/catalog/product/cache/3/swatch/9df78eab33525d08d6e5fb8d27136e95/6/5/6510141.01.2100_c_a4e8ea7.jpg', navyCloth1, sizesCloth1);

      let stoneOfMalazCloth1 = ['https://d356cpcjxoolwe.cloudfront.net/media/catalog/product/cache/3/image/373x485/72b4a3c89279b6295f5413414e9ad668/6/5/6510141.01.0060_d2f0dc9.jpg',
                          'https://d356cpcjxoolwe.cloudfront.net/media/catalog/product/cache/3/image/373x485/72b4a3c89279b6295f5413414e9ad668/6/5/6510141.01.0060_d_be26198.jpg',
                          'https://d356cpcjxoolwe.cloudfront.net/media/catalog/product/cache/3/image/373x485/72b4a3c89279b6295f5413414e9ad668/6/5/6510141.01.0060_d1_47bad73.jpg',
                          'https://d356cpcjxoolwe.cloudfront.net/media/catalog/product/cache/3/image/373x485/72b4a3c89279b6295f5413414e9ad668/6/5/6510141.01.0060_d2_05f8106.jpg'];
      this.clothStock[0].setColorCloth('stone of malaz', 'https://d356cpcjxoolwe.cloudfront.net/media/catalog/product/cache/3/swatch/9df78eab33525d08d6e5fb8d27136e95/6/5/6510141.01.0060_c_9485f47.jpg', stoneOfMalazCloth1, sizesCloth1);


      let paleBlueCloth1 = ['https://d356cpcjxoolwe.cloudfront.net/media/catalog/product/cache/3/image/373x485/72b4a3c89279b6295f5413414e9ad668/6/5/6510141.01.2200_d85f3a8.jpg',
                              'https://d356cpcjxoolwe.cloudfront.net/media/catalog/product/cache/3/image/373x485/72b4a3c89279b6295f5413414e9ad668/6/5/6510141.01.2200_d_a3e0be3.jpg',
                              'https://d356cpcjxoolwe.cloudfront.net/media/catalog/product/cache/3/image/373x485/72b4a3c89279b6295f5413414e9ad668/6/5/6510141.01.2200_d1_75eef43.jpg',
                              'https://d356cpcjxoolwe.cloudfront.net/media/catalog/product/cache/3/image/373x485/72b4a3c89279b6295f5413414e9ad668/6/5/6510141.01.2200_d2_e29260c.jpg'];
      this.clothStock[0].setColorCloth('pale blue', 'https://d356cpcjxoolwe.cloudfront.net/media/catalog/product/cache/3/swatch/9df78eab33525d08d6e5fb8d27136e95/6/5/6510141.01.2200_c_efdd5e3.jpg', paleBlueCloth1, sizesCloth1);




      this.clothStock.push(new clothsPar('all', 'summer', 'שמלה', 189, '6110105'));
      let sizesCloth2 = ['XS', 'S', 'M', 'L'];

      let printCloth2 = [ 'https://d356cpcjxoolwe.cloudfront.net/media/catalog/product/cache/3/image/373x485/72b4a3c89279b6295f5413414e9ad668/6/1/6110105.01.6300_cf90e38.jpg',
                    'https://d356cpcjxoolwe.cloudfront.net/media/catalog/product/cache/3/image/373x485/72b4a3c89279b6295f5413414e9ad668/6/1/6110105.01.6300_d_21756b2.jpg',
                    'https://d356cpcjxoolwe.cloudfront.net/media/catalog/product/cache/3/image/373x485/72b4a3c89279b6295f5413414e9ad668/6/1/6110105.01.6300_d1_a0916c8.jpg',
                    'https://d356cpcjxoolwe.cloudfront.net/media/catalog/product/cache/3/image/373x485/72b4a3c89279b6295f5413414e9ad668/6/1/6110105.01.6300_d2_d67ff42.jpg'];
      this.clothStock[1].setColorCloth('print', 'https://d356cpcjxoolwe.cloudfront.net/media/catalog/product/cache/3/swatch/9df78eab33525d08d6e5fb8d27136e95/6/1/6110105.01.6300_c_8912ee8.jpg', printCloth2, sizesCloth2);



      this.clothStock.push(new clothsPar('all', 'summer', 'חולצה', 109, '8310212'));

      let sizesCloth3 = ['XS', 'S', 'M'];
      let blueCloth3 = ['https://d356cpcjxoolwe.cloudfront.net/media/catalog/product/cache/3/image/373x485/72b4a3c89279b6295f5413414e9ad668/8/3/8310212.01.2000_f93474c.jpg',
                        'https://d356cpcjxoolwe.cloudfront.net/media/catalog/product/cache/3/image/373x485/72b4a3c89279b6295f5413414e9ad668/8/3/8310212.01.2000_d1_6bd2861.jpg',
                        'https://d356cpcjxoolwe.cloudfront.net/media/catalog/product/cache/3/image/373x485/72b4a3c89279b6295f5413414e9ad668/8/3/8310212.01.2000_d2_355824c.jpg',
                        'https://d356cpcjxoolwe.cloudfront.net/media/catalog/product/cache/3/image/373x485/72b4a3c89279b6295f5413414e9ad668/8/3/8310212.01.2000_d_3d2956b.jpg'];
      this.clothStock[2].setColorCloth('blue', 'https://d356cpcjxoolwe.cloudfront.net/media/catalog/product/cache/3/swatch/9df78eab33525d08d6e5fb8d27136e95/8/3/8310212.01.2000_c_ae44dcc.jpg', blueCloth3, sizesCloth3);



      this.clothStock.push(new clothsPar('all', 'winter', 'חולצה', 99, '8610313'));

      let sizesCloth4 = ['XS', 'S', 'M', 'L'];
      let whitheCloth4 = ['https://d356cpcjxoolwe.cloudfront.net/media/catalog/product/cache/3/image/373x485/72b4a3c89279b6295f5413414e9ad668/8/6/8610313.01.6300_df518ff.jpg',
                          'https://d356cpcjxoolwe.cloudfront.net/media/catalog/product/cache/3/image/373x485/72b4a3c89279b6295f5413414e9ad668/8/6/8610313.01.6300_d_8de8085.jpg',
                          'https://d356cpcjxoolwe.cloudfront.net/media/catalog/product/cache/3/image/373x485/72b4a3c89279b6295f5413414e9ad668/8/6/8610313.01.6300_d1_33591dc.jpg',
                          'https://d356cpcjxoolwe.cloudfront.net/media/catalog/product/cache/3/image/373x485/72b4a3c89279b6295f5413414e9ad668/8/6/8610313.01.6300_d2_9c76367.jpg'];
      let blackCloth4 = ['https://d356cpcjxoolwe.cloudfront.net/media/catalog/product/cache/3/image/373x485/72b4a3c89279b6295f5413414e9ad668/8/6/8610313.01.0100_353faac.jpg',
                          'https://d356cpcjxoolwe.cloudfront.net/media/catalog/product/cache/3/image/373x485/72b4a3c89279b6295f5413414e9ad668/8/6/8610313.01.0100_d_9ff34d6.jpg',
                          'https://d356cpcjxoolwe.cloudfront.net/media/catalog/product/cache/3/image/373x485/72b4a3c89279b6295f5413414e9ad668/8/6/8610313.01.0100_d1_57c5a97.jpg',
                          'https://d356cpcjxoolwe.cloudfront.net/media/catalog/product/cache/3/image/373x485/72b4a3c89279b6295f5413414e9ad668/8/6/8610313.01.0100_d2_ae2f60a.jpg'];
      
      this.clothStock[3].setColorCloth('white', 'https://d356cpcjxoolwe.cloudfront.net/media/catalog/product/cache/3/swatch/9df78eab33525d08d6e5fb8d27136e95/8/6/8610313.01.6300_c_f22dd2d.jpg', whitheCloth4, sizesCloth4);
      this.clothStock[3].setColorCloth('black', 'https://d356cpcjxoolwe.cloudfront.net/media/catalog/product/cache/3/swatch/9df78eab33525d08d6e5fb8d27136e95/8/6/8610313.01.0100_c_e6082f3.jpg', blackCloth4, sizesCloth4);




      this.clothStock.push(new clothsPar('all', 'summer', 'נעליים', 59, 'F710087'));

      let sizesCloth5 = ['36', '37', '38', '39', '40', '41'];
      let pinkCloth5 = ['https://d356cpcjxoolwe.cloudfront.net/media/catalog/product/cache/3/image/373x485/72b4a3c89279b6295f5413414e9ad668/f/7/f710087.01.1100_200b183.jpg',
                        'https://d356cpcjxoolwe.cloudfront.net/media/catalog/product/cache/3/image/373x485/72b4a3c89279b6295f5413414e9ad668/f/7/f710087.01.1100_d_2204870.jpg',
                        'https://d356cpcjxoolwe.cloudfront.net/media/catalog/product/cache/3/image/373x485/72b4a3c89279b6295f5413414e9ad668/f/7/f710087.01.1100_d1_9544c66.jpg',
                        'https://d356cpcjxoolwe.cloudfront.net/media/catalog/product/cache/3/image/373x485/72b4a3c89279b6295f5413414e9ad668/f/7/f710087.01.1100_d2_c076980.jpg'];
      let bananaCloth5 = ['https://d356cpcjxoolwe.cloudfront.net/media/catalog/product/cache/3/image/373x485/72b4a3c89279b6295f5413414e9ad668/f/7/f710087.01.3800_da240c6.jpg',
                          'https://d356cpcjxoolwe.cloudfront.net/media/catalog/product/cache/3/image/373x485/72b4a3c89279b6295f5413414e9ad668/f/7/f710087.01.3800_d_7796a57.jpg',
                          'https://d356cpcjxoolwe.cloudfront.net/media/catalog/product/cache/3/image/373x485/72b4a3c89279b6295f5413414e9ad668/f/7/f710087.01.3800_d1_3da2369.jpg',
                          'https://d356cpcjxoolwe.cloudfront.net/media/catalog/product/cache/3/image/373x485/72b4a3c89279b6295f5413414e9ad668/f/7/f710087.01.3800_d2_79f1520.jpg'];
      let whiteCloth5 = ['https://d356cpcjxoolwe.cloudfront.net/media/catalog/product/cache/3/image/373x485/72b4a3c89279b6295f5413414e9ad668/f/7/f710087.01.0500_18c1c25.jpg',
                          'https://d356cpcjxoolwe.cloudfront.net/media/catalog/product/cache/3/image/373x485/72b4a3c89279b6295f5413414e9ad668/f/7/f710087.01.0500_d_d0b052a.jpg',
                          'https://d356cpcjxoolwe.cloudfront.net/media/catalog/product/cache/3/image/373x485/72b4a3c89279b6295f5413414e9ad668/f/7/f710087.01.0500_d1_9225a98.jpg',
                          'https://d356cpcjxoolwe.cloudfront.net/media/catalog/product/cache/3/image/373x485/72b4a3c89279b6295f5413414e9ad668/f/7/f710087.01.0500_d2_1333cb7.jpg'];
      
      this.clothStock[4].setColorCloth('pink', 'https://d356cpcjxoolwe.cloudfront.net/media/catalog/product/cache/3/swatch/9df78eab33525d08d6e5fb8d27136e95/f/7/f710087.01.1100_c_ae27806.jpg', pinkCloth5, sizesCloth5);
      this.clothStock[4].setColorCloth('banana', 'https://d356cpcjxoolwe.cloudfront.net/media/catalog/product/cache/3/swatch/9df78eab33525d08d6e5fb8d27136e95/f/7/f710087.01.3800_c_e0d55c1.jpg', bananaCloth5, sizesCloth5);
      this.clothStock[4].setColorCloth('white', 'https://d356cpcjxoolwe.cloudfront.net/media/catalog/product/cache/3/swatch/9df78eab33525d08d6e5fb8d27136e95/f/7/f710087.01.0500_c_ca498e0.jpg', whiteCloth5, sizesCloth5);




      this.clothStock.push(new clothsPar('all', 'winter', 'נעליים', 99, 'F810078'));

      let sizescloth6 = ['36', '37', '38', '39', '40', '41'];
      let jeansBlueCloth6 = ['https://d356cpcjxoolwe.cloudfront.net/media/catalog/product/cache/3/image/373x485/72b4a3c89279b6295f5413414e9ad668/f/8/f810078.01.0192_b7658f2.jpg',
                              'https://d356cpcjxoolwe.cloudfront.net/media/catalog/product/cache/3/image/373x485/72b4a3c89279b6295f5413414e9ad668/f/8/f810078.01.0192_d_21bad5f.jpg',
                              'https://d356cpcjxoolwe.cloudfront.net/media/catalog/product/cache/3/image/373x485/72b4a3c89279b6295f5413414e9ad668/f/8/f810078.01.0192_d1_b75d18e.jpg',
                              'https://d356cpcjxoolwe.cloudfront.net/media/catalog/product/cache/3/image/373x485/72b4a3c89279b6295f5413414e9ad668/f/8/f810078.01.0192_d3_34106a3.jpg'];

      this.clothStock[5].setColorCloth('jeans blue', 'https://d356cpcjxoolwe.cloudfront.net/media/catalog/product/cache/3/swatch/9df78eab33525d08d6e5fb8d27136e95/f/8/f810078.01.0192_c_b92b4db.jpg', jeansBlueCloth6, sizescloth6);

      
  }


  clothSelect(selected){
    this.flag = false;
    this.choosenCloth = [];
    if(this.categories.length){
      for(let i=0; i<this.categories.length; i++){
        if(this.categories[i] == selected){
          this.categories[i] = this.categories[this.categories.length - 1];
          this.categories.pop();
          this.flag = true;
          selected = '';
          break;
        }
      }
      if(!this.flag || selected != ''){
        this.categories.push(selected);
      }

      if(!this.categories.length){
        this.choosenCloth = this.clothStock;
      }

      
      for(let i=0; i<this.categories.length; i++){
        for(let j=0; j<this.clothStock.length; j++){
        if(this.categories[i] == this.clothStock[j].getType()){
          this.choosenCloth.push(this.clothStock[j]);
        }
        }
      }
    }

    else{
      this.categories.push(selected);

      for(let i=0; i<this.categories.length; i++){
        for(let j=0; j<this.clothStock.length; j++){
        if(this.categories[i] == this.clothStock[j].getType()){
          this.choosenCloth.push(this.clothStock[j]);
        }
        }
      }
    }

    this.showCloth();
    
  }

  showCloth(){
    this.leftSide = [];
    this.rightSide = [];
    this.centerSide = [];
    for(let i=0; i<this.choosenCloth.length; i += 3){
      if(this.choosenCloth.length > i)
      this.leftSide.push(this.choosenCloth[i]);
      if(this.choosenCloth.length > i+1)
      this.centerSide.push(this.choosenCloth[i+1]);
      if(this.choosenCloth.length > i+2)
      this.rightSide.push(this.choosenCloth[i+2]);
    }

    this.fullLeft = true;
    this.fullCenter = true;
    this.fullRight = true;
    if(!this.leftSide.length){
      this.fullLeft = false;
    }

    if(!this.centerSide.length){
      this.fullCenter = false;
    }

    if(!this.rightSide.length){
      this.fullRight = false;
    }

  }


  selectedItemSizes():string[][]{
    for(let i=0; i < this.showDetailCloth.getColorCloth().length; i++){
        this.clothSize.push(this.showDetailCloth.getColorCloth()[i].getSizes());
    }

    return this.clothSize;
  }

  slectedItemPic():string[][]{
    this.clothPic = [];
    for(let i=0; i < this.showDetailCloth.getColorCloth().length; i++){
      this.clothPic.push(this.showDetailCloth.getColorCloth()[i].getClothPic());
  }
  return this.clothPic;
  }
  


}
