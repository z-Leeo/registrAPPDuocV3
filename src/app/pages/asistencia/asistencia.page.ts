import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { ResetForm } from '../model/reset-form';
import { Subscription } from 'rxjs';
import { LoadingController } from '@ionic/angular';
import { AsistenciaService } from 'src/app/service/asistencia.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-asistencia',
  templateUrl: './asistencia.page.html',
  styleUrls: ['./asistencia.page.scss'],
})
export class AsistenciaPage implements OnInit {

  public alertButtons = ['OK'];

  formularioA: FormGroup

  objResetForm: ResetForm = new ResetForm();
  nombre: string = '';
  apellido: string = '';
  NE:string = '';
  rut: string = '';
  
  constructor(private loadingCtrl : LoadingController,
              private router: Router,
              private asistenciaService : AsistenciaService) { 


                this.formularioA = new FormGroup({
                  nombre : new FormControl(),
                  apellido: new FormControl(),
                  NE:new FormControl(),
                  rut: new FormControl()
                })
              }

  ngOnInit() {
  }

  
  clearC() {
    this.nombre = '';
    this.apellido = '';
    this.NE = '';
    this.rut= '';
  }

  async continuar(){
    this.router.navigate(['/home'])
    console.log(this.formularioA.value)
    const response = await this.asistenciaService.addAsist(this.formularioA.value);
    console.log(response)
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
