import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AauthService } from './auth.service';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
constructor(
  private _authService: AauthService,
  private _router: Router,
  private user: UserService,
){}

canActivate(): boolean{
  debugger
  if(this._authService.logedIn()){
    return true;
  } 
}
  
}
