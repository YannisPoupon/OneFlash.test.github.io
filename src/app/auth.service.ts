import { Injectable } from '@angular/core';
import { PassThrough } from 'stream';
import { User } from './models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user  : User = {
      id : 1,
      login : 'yannis',
      password : '12345'
    }


  constructor() { }

  authUser( credentials : { login :string, password : string }) : boolean {

     return ( credentials.login === this.user.login && credentials.password === this.user.password ) ?  true : false

  }
}
