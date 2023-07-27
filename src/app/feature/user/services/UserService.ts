import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({providedIn: 'root'})
export class ServiceNameService {
  constructor(private _db: AngularFirestore) { }

  async getUserData(uid: string) {
  }  
}