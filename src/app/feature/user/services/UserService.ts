import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { IUser } from 'src/app/core/models/User';
import { map } from 'rxjs';

@Injectable({providedIn: 'root'})
export class UserService {
  constructor(private _db: AngularFirestore) { }

  async getUserData(uid: string) {
    return this._db.collection("users").doc(uid).get().pipe(map(docSnapshot => {
      const data = JSON.parse(JSON.stringify(docSnapshot.data))
      return data as IUser
    }))
  }  
}