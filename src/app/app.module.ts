import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NgxMapboxGLModule } from 'ngx-mapbox-gl';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxMapboxGLModule.withConfig({
      accessToken: 'pk.eyJ1IjoidG1vc3MzNDMiLCJhIjoiY2p5N2x6MHFuMDB2bTNtb2w1MGZjbXVsMSJ9.XVVC_xaGOFHgbOFJNMl7fA', // Optionnal, can also be set per map (accessToken input of mgl-map)
      geocoderAccessToken: 'pk.eyJ1IjoidG1vc3MzNDMiLCJhIjoiY2p5N2x6MHFuMDB2bTNtb2w1MGZjbXVsMSJ9.XVVC_xaGOFHgbOFJNMl7fA' // Optionnal, specify if different from the map access token, can also be set per mgl-geocoder (accessToken input of mgl-geocoder)
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
