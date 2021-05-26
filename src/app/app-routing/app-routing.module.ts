import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {RouterModule, Routes} from '@angular/router';
import {RegisterComponent} from '../views/register/register.component';
import {LoginComponent} from '../views/login/login.component';
import {ProfileComponent} from '../views/client/profile/profile.component';
import {CreationColisComponent} from '../views/client/creation-colis/creation-colis.component';
import {HomecComponent} from '../views/client/homec/homec.component';
import {ClientComponent} from '../views/register/client/client.component';
import {HomeComponent} from '../views/home/home/home.component';
import {ColisComponent} from '../views/client/colis/colis.component';
import {DeliveryManComponent} from '../views/register/delivery-man/delivery-man.component';

const routes: Routes = [
  { path: '', redirectTo:'/home', pathMatch:'full'},
  { path: 'register', component: RegisterComponent},
  { path: 'login', component: LoginComponent},
  { path: 'profile', component: ProfileComponent},
  { path: 'creation', component: CreationColisComponent},
  { path: 'homeclient', component: HomecComponent},
  { path: 'regclient', component:ClientComponent},
  { path: 'regdelivery', component:DeliveryManComponent},
  {path:'home' , component:HomeComponent},
  {path:'mypacks', component:ColisComponent}
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [RegisterComponent, DeliveryManComponent, LoginComponent, CreationColisComponent, ClientComponent, HomecComponent, HomeComponent, ColisComponent];
