import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthentificationComponent } from './authentification/authentification.component';
import { HomeComponent } from './home/home.component';
import { TimerComponent } from './timer/timer.component';

const routes: Routes = [
  { path : '' , component : HomeComponent },
  { path : 'auth', component : AuthentificationComponent, data: { animation: 'isRight' }  },
  { path : 'timer', component : TimerComponent, data: { animation: 'isLeft' }  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
