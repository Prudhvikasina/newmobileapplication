import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// import { Capacitor } from '@capacitor/core';
// import { FacebookLoginProvider } from 'angularx-social-login';
// import { initializeApp } from 'firebase/app';
// import { indexedDBLocalPersistence, initializeAuth } from 'firebase/auth';
// import { from } from 'rxjs';
import { AuthenticationService } from '../shared/authentication-service';
// import { auth } from "firebase/app";
// import { from } from 'rxjs';
// import {SocialLoginModule, SocialAuthServiceConfig} from 'lib';
// import {
//   FacebookLoginProvider,
// } from 'lib';
// import { GooglePlus } from '@ionic-native/google-plus/ngx';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  // auth: any;
  // googleAnalyticsServices: any;
  // platform: any;
  // googlePlus: any;
  // socialloginData: any;
  // user: any;
  // loggedIn: boolean;
  // socialLogin: any;
  // firestore: any;
  constructor(
    public authService:  AuthenticationService,
    public router: Router,
     
  ) {}
  
  // createUserViaGoogle(){
  //   from(this.auth.SignInWithPopup(new this.auth.GoogleAuthProvider()).pipe
  //   )
  // }

  ngOnInit() {}
  

  // signInWithFB(): void {
  //   this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
  // } 
 
  // signInWithGoogle():void{
  //   this.googleAnalyticsServices.eventEmitter('loggedin_with_Google','login_actions','Google login',null);
  //   if(this.platform.is('cordova')) {
  //     this.googlePlus.login(GoogleloginProvider).then(res =>{
  //       this.socialloginData.firstName = res.givenName;
  //       this.socialloginData.lastName = res.familyName;
  //       this.socialloginData.name = res.displayName;
  //       this.socialloginData.photoURL = res.displayName;
  //       this.socialloginData.id = res.userId;
  //       this.socialloginData.authToken = res.accessToken;
  //       this.socialloginData.provider = "GOOGLE";
  //       this.commonLogin(this.socialloginData);
  //       this.googlePlus.logout().then(_res =>{})
  //     }).catch(err =>{
  //       console.error(err);
  //       this.presentToast('Google login error from Google service' + JSON.stringify(err));
  //     });
  //   } else {
  //     let auth = this.authService.signIn('GoogleloginProvider.PROVIDER_ID');
  //     this.authService.authState.subscribe((user) => {
  //       this.user = this.user;
  //       this.loggedIn = (this.user != null);
  //       if (!this.socialLogin) {
  //         this.commonLogin(this.user);
  //       }
  //     });
  //   }
  // }
  // presentToast(_arg0: string) {
  //   throw new Error('Method not implemented.');
  // }
  // commonLogin(_socialloginData: any) {
  //   throw new Error('Method not implemented.');
  // }



  

  logIn(email, password) {
    this.authService
      .SignIn(email.value, password.value)
      .then((_res) => {
        if (this.authService.isEmailVerified) {
          this.router.navigate(['dashboard']);
        } else {
          window.alert('Email is not verified');
          return false;
        }
      })
      .catch((error) => {
        window.alert(error.message);
      });
  }
}



// function GoogleloginProvider(GoogleloginProvider: any) {
//   throw new Error('Function not implemented.');
// }

