import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { WatchlistComponent } from './watchlist/watchlist.component';
import { ParticlesModule } from 'angular-particle';
import { MainComponentComponent } from './main-component/main-component.component';
const config = {
  apiKey: "AIzaSyBOU1AN_Sc-jb4VJbCPcz_LqeGOXxnGLL0",
  authDomain: "movathon-8ea2d.firebaseapp.com",
  databaseURL: "https://movathon-8ea2d.firebaseio.com",
  projectId: "movathon-8ea2d",
  storageBucket: "movathon-8ea2d.appspot.com",
  messagingSenderId: "353674721393",
  appId: "1:353674721393:web:3619ec24eb4d19328843d0"
}
@NgModule({
  declarations: [
    AppComponent,
    UserProfileComponent,
    WatchlistComponent,
    MainComponentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    ParticlesModule,
    AngularFireModule.initializeApp(config),
    AngularFirestoreModule,
    AngularFireAuthModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
