import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { reject } from 'q';


@Injectable({
  providedIn: 'root'
})
export class AauthService {

  private _registarUrl = 'http://localhost:3000/user/signup'; //backend api url (registration)
  private _loginUrl = 'http://localhost:3000/user/login'; //backend api url (login)
  private _refreshTokenUrl = 'http://localhost:3000/user/refreshToken'; //backend api url (refreshtoken)
  private _checkTokenUrl = 'http://localhost:3000/user/token'; //backend api url (token)
  private _dimensionSizes = 'http://localhost:3000/user/updateProfile'; //my size dimensions

  constructor(private http: HttpClient) { }



  registerUser(user){
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
