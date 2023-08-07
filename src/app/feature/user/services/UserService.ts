import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/compat/firestore';
import { IUser } from 'src/app/core/models/User';

@Injectable({ providedIn: 'root' })
export class UserService {
  private dbPath = '/user';
  userRef: AngularFirestoreCollection<IUser>;

  constructor(private _db: AngularFirestore) {
    this.userRef = _db.collection(this.dbPath)
  }

  getSingleUser(uid: string): any {
    try {
      console.log(uid)
      return this.userRef.doc(uid).get()
    } catch (error) {
      console.error("Error while fetching user: ", error)
    }
  }
}
