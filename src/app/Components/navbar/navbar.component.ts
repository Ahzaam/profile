import { Component, OnInit } from '@angular/core';
import {fader } from '../../route-animations';


import {MatSnackBar} from '@angular/material/snack-bar';
import { AngularFirestore} from '@angular/fire/compat/firestore';
import { increment } from '@angular/fire/firestore';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  
})
export class NavbarComponent implements OnInit {

  like: boolean = false;
  likes:number = 0;
  constructor( private db: AngularFirestore, public snackBar:MatSnackBar) { }

  ngOnInit(): void {
    
    this.db.collection('analytics').doc('visitors').update({visit:increment(1)})
    this.db.collection('analytics').doc('likes').get()
    .forEach((value:any) => {
      this.likes = value.data().like
    })
    
  }

  liked(){
    if(!this.like){
      this.db.collection('analytics').doc('likes').update({like: increment(1)})
    .then(() => {
      this.like = true
      ++this.likes

      this.snackBar.open("Thank you !", " ❤️ ❤️ ❤️ ❤️ ", {
        duration: 3000,
        verticalPosition: 'bottom',
            horizontalPosition:'right',
           panelClass:['mat-snackbar-white']
        
      });
    })
    .catch(err => console.error(err))
    }else{
      this.db.collection('analytics').doc('likes').update({like: increment(-1)})
    .then(() => {
      this.like = false
      --this.likes
    })
    .catch(err => console.error(err))
    }
  }

}
