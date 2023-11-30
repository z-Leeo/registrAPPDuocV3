import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthServiceService } from '../auth-service.service';
import { Router } from '@angular/router';
import { BarcodeScanner } from '@capacitor-community/barcode-scanner';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnDestroy {
  qrCodeString = 'Asistencia Duoc UC';
  scannedResult: any;
  content_visibility = '';
  email: any;
  code: any;

  constructor(
    private authService: AuthServiceService,
    private router: Router,
    private alertController: AlertController,
  ) {}

  ngOnInit(): void {
    this.authService.getProfile().then((user) => {
      this.email = user?.email;
      console.log(user);
    });
  }

  async checkPermission() {
    try {
      const status = await BarcodeScanner.checkPermission({ force: true });
      if (status.granted) {
        return true;
      }
      return false;
    } catch (e) {
      console.log(e);
    }
  }

  async startScan() {
    try {
      const permission = await this.checkPermission();
      if (!permission) {
        return;
      }
      await BarcodeScanner.hideBackground();
      document.querySelector('body').classList.add('scanner-active');
      this.content_visibility = 'hidden';
      const result = await BarcodeScanner.startScan();
      BarcodeScanner.showBackground();
      document.querySelector('body').classList.remove('scanner-active');
      this.content_visibility = '';
      if (result?.hasContent) {
        this.scannedResult = result.content;
        console.log(this.scannedResult);

        // Realiza la navegación a asistencia.page.html al escanear el código QR
        this.navigateToAsistenciaPage();
      }
    } catch (e) {
      console.log(e);
      this.stopScan();
    }
  }

  stopScan() {
    BarcodeScanner.showBackground();
    BarcodeScanner.stopScan();
    document.querySelector('body').classList.remove('scanner-active');
    this.content_visibility = '';
  }

  ngOnDestroy(): void {
    this.stopScan();
  }

  signOut() {
    this.authService.signOut().then(() => {
      this.router.navigate(['/landing']);
    });
  }

  // Método para navegar a asistencia.page.html
  private navigateToAsistenciaPage() {
    this.router.navigate(['/asistencia']);
  }
}
