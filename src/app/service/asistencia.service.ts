import { Injectable } from '@angular/core';
import { Firestore , collection, addDoc} from '@angular/fire/firestore';


@Injectable({
  providedIn: 'root'
})
export class AsistenciaService {

  constructor(private firestore: Firestore) { }


  addAsist(asistenciaService : AsistenciaService){
    const asisRef = collection(this.firestore , 'asistencia');
    return addDoc(asisRef, asistenciaService);
  }
}
