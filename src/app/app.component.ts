import { Component, OnInit} from '@angular/core';

import * as firebase from 'firebase/compat/app';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'AppCompras';
  ngOnInit(){
    firebase.default.initializeApp({
      projectId: 'appcompras-89748',
      apiKey: 'AIzaSyBe4kt-pd9ot1bmAocW93HqT7vuk-WuSLE',
      authDomain: 'appcompras-89748.firebaseapp.com'
    });
  }
  
}
