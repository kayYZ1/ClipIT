import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';


@Injectable({providedIn: 'root'})
export class UserService {
  constructor(private _db: AngularFirestore) { }

  async getUser(uid: string) {
  }  
}