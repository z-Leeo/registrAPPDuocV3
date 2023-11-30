import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { Observable, of } from 'rxjs';
import { Router } from '@angular/router';
import firebase from 'firebase/compat/app';
import { Auth } from 'firebase/auth';
import { getAuth } from 'firebase/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  private auth: Auth; // Agrega una propiedad privada para almacenar el objeto Auth

  constructor(public ngFireAuth: AngularFireAuth, private router: Router) {
    this.auth = getAuth(); // Inicializa el objeto Auth
  }

  getAuthToken(): Observable<boolean> {
    return of(true);
  }

  async registerUser(email: string, password: string, name: string) {
    return await this.ngFireAuth.createUserWithEmailAndPassword(email, password);
  }

  async loginUser(email: string, password: string) {
    return await this.ngFireAuth.signInWithEmailAndPassword(email, password);
  }

  async resetPassword(email: string) {
    return await this.ngFireAuth.sendPasswordResetEmail(email);
  }

  async getProfile() {
    return await this.ngFireAuth.currentUser;
  }

  async signOut() {
    await this.ngFireAuth.signOut();
    // Redirige a la página de inicio de sesión después del cierre de sesión
    this.router.navigate(['/login']);
  }

  async AuthLogin(provider: any) {
    try {
      const result = await signInWithPopup(this.auth, provider); // Usa el objeto Auth en lugar de AngularFireAuth
      // Puedes redirigir a la página deseada después del inicio de sesión exitoso
      this.router.navigate(['/dashboard']);
      // También puedes manejar la información del usuario aquí llamando a un método SetUserData(result.user);
    } catch (error) {
      window.alert(error);
    }
  }

  async GoogleAuth() {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(this.auth, provider); // Usa el objeto Auth en lugar de AngularFireAuth
      // Puedes redirigir a la página deseada después del inicio de sesión exitoso
      this.router.navigate(['/dashboard']);
      // También puedes manejar la información del usuario aquí llamando a un método SetUserData(result.user);
    } catch (error) {
      window.alert(error);
    }
  }

  async signInWithPhoneNumber(phoneNumber: string) {
    const appVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container');
    try {
      const confirmationResult = await this.ngFireAuth.signInWithPhoneNumber(phoneNumber, appVerifier);
      const verificationCode = window.prompt(phoneNumber + 'Enter the verification code');

      if (verificationCode) {
        const userCredential = await confirmationResult.confirm(verificationCode);
        // El usuario ahora está autenticado
        console.log(userCredential.user);
      }
    } catch (error) {
      window.alert(error);
    }
  }
}
