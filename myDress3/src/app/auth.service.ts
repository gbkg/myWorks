import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { reject } from 'q';



@Injectable({
  providedIn: 'root'
})
export class AauthService {
  url = 'http://kkaada.herokuapp.com';

  private _registarUrl = this.url + '/user/signup'; //backend api url (registration)
  private _loginUrl = this.url + '/user/login'; //backend api url (login)
  private _refreshTokenUrl = this.url + 'user/refreshToken'; //backend api url (refreshtoken)
  private _checkTokenUrl = this.url + '/user/token'; //backend api url (token)
  private _dimensionSizes = this.url + '/user/updateProfile'; //my size dimensions
  private _cart = this.url + '/user/add-to-cart'; //cart adittion
  private _getCart = this.url + '/user/get-cart';

  constructor(
    private http: HttpClient,
    ) {}


    sendCart(color, size, barcode, pic, Qty, money, email){
      let insertCart = {color: color, size: size, barcode: barcode, image: pic, quantity: Qty, price: money, email: email};
      return this.http.post<any>(this._cart+'?token='+localStorage.getItem('token'), insertCart);
    }

    getCart(){
      return this.http.get<any>(this._getCart +'?token='+localStorage.getItem('token'));
    }

  registerUser(user){
    localStorage.setItem('check', user);
    return this.http.post<any>(this._registarUrl, user)
  }

  loginUser(user){
    return this.http.post<any>(this._loginUrl, user)
  }

  logedIn(){
    return !!localStorage.getItem('token');
  }

  

  sizeDimension(myDimension, options){
    return this.http.put<any>(this._dimensionSizes,myDimension, options)
  }





  async refreshToken(){
    
    return new Promise( resolve =>
    this.http.post<any>(this._refreshTokenUrl, {"refreshtoken":localStorage.refreshtoken})
    .subscribe(
      res => {
        console.log(res)
        if (res.success){
          console.log("hellooo2")
          localStorage.setItem('token', res.data.token)
          resolve(true);
        } 
      },
      err => console.log(err)
      ));

  }

  async checkToken(){

    return new Promise( resolve =>

    this.http.post<any>(this._checkTokenUrl, {"token":localStorage.token, "email":localStorage.email})
    .subscribe(
      async res => {
        console.log(res)
        if (!res.success){
          await this.refreshToken()
        } 
        resolve(true);
      },
      err => console.log(err)
    ));

    }





  }
