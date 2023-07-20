import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { IUser } from 'src/app/core/models/User';

@Injectable({providedIn: 'root'})
export class AuthService {
  private usersCollection: AngularFirestoreCollection<IUser>
  constructor(private _auth: AngularFireAuth, private _db: AngularFirestore) {
    this.usersCollection = _db.collection("user")
  }

  public async createUser(user: IUser) {
    const credentials = await this._auth.createUserWithEmailAndPassword(
      user.email, user.password
    )

    if (!credentials.user) {
      throw new Error("User can not be found.")
    }

    await this.usersCollection.doc(credentials.user.uid).set({
      
      email: user.email,
      password: user.password,
      username: user.username,
      age: user.age,
      avatar: "",
      about: "Default"
    })
  }
}