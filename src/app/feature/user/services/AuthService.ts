import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/compat/firestore';
import { Observable, map } from 'rxjs';
import { IUser, IUserLogin } from 'src/app/core/models/User';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private usersCollection: AngularFirestoreCollection<IUser>;
  public isAuthenticated$: Observable<boolean>;
  private userData: any;

  constructor(private _auth: AngularFireAuth, private _db: AngularFirestore) {
    this.usersCollection = _db.collection('user');
    this.isAuthenticated$ = _auth.user.pipe(map((user) => !!user));

    this._auth.authState.subscribe((user) => {
      if (user) {
        this.userData = user;
        sessionStorage.setItem('user', JSON.stringify(this.userData));
        JSON.parse(sessionStorage.getItem('user')!);
      } else {
        sessionStorage.setItem('user', 'null');
        JSON.parse(sessionStorage.getItem('user')!);
      }
    });
  }

  public async createUser(user: IUser) {
    const credentials = await this._auth.createUserWithEmailAndPassword(
      user.email,
      user.password
    );

    if (!credentials.user) {
      throw new Error('User can not be found.');
    }

    await this.usersCollection.doc(credentials.user.uid).set({
      email: user.email,
      password: user.password,
      username: user.username,
      age: user.age,
      avatar: '',
      about: 'Default',
    });
  }

  public async userLogin(user: IUserLogin) {
    const credentials = await this._auth.signInWithEmailAndPassword(
      user.email,
      user.password
    );

    if (!credentials.user) {
      throw new Error('User can not be found.');
    }
    console.log(credentials);
    return credentials;
  }
}
