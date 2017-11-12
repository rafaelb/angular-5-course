import {Component, OnInit} from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // styleUrls: ['./app.component.css']
  styles: [`
    h3 {
    color: dodgerblue;
    }
  `]
})
export class AppComponent  implements OnInit {
  ngOnInit() {
    firebase.initializeApp({
      apiKey: "AIzaSyB9cXi89AGcO_c5VqUlEaPO6ditS6VJSGc",
      authDomain: "rb-recipe-book.firebaseapp.com"
    });
  }
}
