import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { environment } from '../environments/environment';
import { RegComponent } from './reg/reg.component';
import { WeluserComponent } from './weluser/weluser.component';
import { BoardComponent } from './board/board.component';
import { HomePage } from 'IonNgCapGoogleLogin/src/app/home/home.page';
import { RegistrationPage } from './registration/registration.page';
import { SiginComponent } from './sigin/sigin.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';






@NgModule({
  declarations: [AppComponent, RegComponent, WeluserComponent, BoardComponent,SiginComponent,HomePage,RegistrationPage,],
  entryComponents: [],
  imports: [
    BrowserModule,

    IonicModule.forRoot(),
     
    AppRoutingModule,
    
    AngularFireModule.initializeApp(environment.firebaseConfig),

    AngularFireAuthModule,

    AngularFirestoreModule,

    AngularFireStorageModule,

    AngularFireDatabaseModule,

  ],

  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],

  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  

})

export class AppModule { }


