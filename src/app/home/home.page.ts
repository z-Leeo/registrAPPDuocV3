import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../auth-service.service';
import { Router } from '@angular/router';
import { BarcodeScanner } from '@capacitor-community/barcode-scanner';

import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
  email :any
  code:any
  constructor(private authService:AuthServiceService,
              private router: Router,
              private alertController: AlertController,
              ) {}
  ngOnInit(): void {
   

 

    this.authService.getProfile().then((user) =>{
        this.email = user?.email
        console.log(user);
        
    });
  }


  async scanQRCode() {
    try {
      const result = await BarcodeScanner.startScan();

      if (result.hasContent) {
        console.log('Scanned QR code content:', result.content);
        // Handle the scanned content as needed
      } else {
        console.log('Scanning canceled or failed.');
      }
    } catch (error) {
      console.error('Error while scanning QR code:', error);
    }
  }

  


  
 signOut(){

  this.authService.signOut().then(() =>{
    this.router.navigate(['/landing'])
  })
 }



}
