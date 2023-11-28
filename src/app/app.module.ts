import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AuthServiceService } from './auth-service.service';
import { environment } from 'src/environments/environment';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { BarcodeScanner } from '@capacitor-community/barcode-scanner';


@NgModule({
  declarations: [AppComponent ,],
  imports: [BrowserModule,
            AngularFireAuthModule,
            AngularFireModule,
            AngularFireModule.initializeApp(environment.firebaseConfig),
    ReactiveFormsModule,
    IonicModule.forRoot(), AppRoutingModule, provideFirebaseApp(() => initializeApp({"projectId":"registrappduocv3","appId":"1:461711466911:web:edf8cea0bd668bc0f4ddaa","storageBucket":"registrappduocv3.appspot.com","apiKey":"AIzaSyDXpVBleczOdrsPKhSYXj_POeNJlaFYakg","authDomain":"registrappduocv3.firebaseapp.com","messagingSenderId":"461711466911","measurementId":"G-BHHLVSS335"})), provideFirestore(() => getFirestore())],
  providers: [  { provide: RouteReuseStrategy, useClass: IonicRouteStrategy}, ],
  bootstrap: [AppComponent],
})
export class AppModule {}
