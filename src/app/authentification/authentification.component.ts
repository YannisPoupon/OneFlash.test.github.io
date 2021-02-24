import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-authentification',
  templateUrl: './authentification.component.html',
  styleUrls: ['./authentification.component.scss']
})
export class AuthentificationComponent implements OnInit {

  hide = true;

  isAuth : boolean = false
  isValid : boolean = true

  constructor(private router : Router, private _auth: AuthService,private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  userAuth(u) {
    if (u.valid) {

      this._auth.authUser(u.value) ? this.isAuth = true : this.isValid = false
    }

    if (this.isValid == false){
      this._snackBar.open('Erreur dans le login ou le mot de passe', 'Fermer', {
      duration: 4000,
      horizontalPosition: 'center',
      verticalPosition: 'top',
    });
    u.reset();
  }

  if (this.isAuth == true){
    this._snackBar.open('Authentification confirmée', '', {
    duration: 1200,
    horizontalPosition: 'center',
    verticalPosition: 'top',
  });
   this.router.navigate([''])
}
    setTimeout(() => this.isValid = true, 1200)
  }

  toHome(){
    this.router.navigate([''])
  }

}
