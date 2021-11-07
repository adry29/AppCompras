import { Injectable } from '@angular/core';
import * as firebase from 'firebase/compat/app';
import {Router, ActivatedRoute} from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AutenticacionService {
  

  constructor(private router: Router,
    private activatedRouter: ActivatedRoute) { }
    inicioSesion (userdata) {
      firebase.default.auth().signInWithEmailAndPassword(userdata.email,
      userdata.password)
      .then(response => {
      console.log(response);
      this.router.navigate(['/inicio']);
    })
    .catch(
    error => {
    console.log(error);
    }
    )
    }
  
  registroUsuario (userdata) {
    firebase.default.auth().createUserWithEmailAndPassword(userdata.email,
    userdata.password)
    .catch(error => {
      console.log(error);
      }
      )
      }

      isAuthenticated() {
        const user = firebase.default.auth().currentUser;
        if (user) {
        return true;
        } else {
        return false;
        }
        }

        logout() {
          firebase.default.auth().signOut();
          }
}