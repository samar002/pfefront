import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgModel} from '@angular/forms';
import { AppComponent } from './app.component';
import { ReactiveFormsModule} from '@angular/forms';

import {AppRoutingModule, routingComponents } from './app-routing/app-routing.module';
import {HttpClientModule} from '@angular/common/http';
import { NavbarComponent } from './views/home/navbar/navbar.component';
import { ProfileComponent } from './views/client/profile/profile.component';
import { CreationColisComponent } from './views/client/creation-colis/creation-colis.component';
import { FooterComponent } from './views/home/footer/footer.component';
import { ClientComponent } from './views/register/client/client.component';
import { DeliveryManComponent } from './views/register/delivery-man/delivery-man.component';
import { SliderComponent } from './views/home/slider/slider.component';
import { ServicesComponent } from './views/home/services/services.component';
import { HomecComponent } from './views/client/homec/homec.component';
import { SidebarComponent } from './views/client/sidebar/sidebar.component';
import { HomeComponent } from './views/home/home/home.component';
import { ColisComponent } from './views/client/colis/colis.component';
import { TrackComponent } from './views/client/track/track.component';


@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    NavbarComponent,
    ProfileComponent,
    CreationColisComponent,
    FooterComponent,
    ClientComponent,
    DeliveryManComponent,
    SliderComponent,
    ServicesComponent,
    HomecComponent,
    SidebarComponent,
    HomeComponent,
    ColisComponent,
    TrackComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
