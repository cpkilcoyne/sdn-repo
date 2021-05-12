import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public afs: AngularFirestore, public afAuth: AngularFireAuth) { }

  signUserIn(email, password) {
    return from(this.afAuth.signInWithEmailAndPassword(email, password));
  }

  createUser(email, password) {
    this.afAuth.createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Signed in 
      console.log(userCredential);
      var user = userCredential.user;
      console.log(user);
      // ...
    })
    .catch((error) => {
      console.log(error);
      var errorCode = error.code;
      var errorMessage = error.message;
      // ..
    });
  }
}
