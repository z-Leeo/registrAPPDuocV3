import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { ResetForm } from '../model/reset-form';
import { Subscription } from 'rxjs';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-asistencia',
  templateUrl: './asistencia.page.html',
  styleUrls: ['./asistencia.page.scss'],
})
export class AsistenciaPage implements OnInit {

  public alertButtons = ['OK'];

  objResetForm: ResetForm = new ResetForm();
  nombre: string = '';
  apellido: string = '';
  NE:string = '';
  rut: string = '';
  
  constructor(private loadingCtrl : LoadingController,
              private router: Router,) { }

  ngOnInit() {
  }

  
  clearC() {
    this.nombre = '';
    this.apellido = '';
    this.NE = '';
    this.rut= '';
  }

  continuar(){
    this.router.navigate(['/home'])
  }

  async cerrar(){
    const loading = await this.loadingCtrl.create({
      message: 'Saliendo...',
      duration: 1000,
      cssClass: 'custom-loading',
    });

    this.router.navigate(['/home'])
    loading.present();
  }


  
}
