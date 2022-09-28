import { Component, OnInit, Input } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';
import { AngularFirestore} from '@angular/fire/compat/firestore';
import { increment } from '@angular/fire/firestore';


@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})


export class HeroComponent implements OnInit {
  @Input() regdata: any = null;
  constructor(public snackBar: MatSnackBar, private db:AngularFirestore) { }

  ngOnInit(): void {
  
  }
  


  cvDownload = () =>{
    this.db.collection('analytics').doc('cvdownloads').update({count:increment(1)})
    .then((responce:any) => console.log(responce))
    this.snackBar.open("File Downloaded", "", {
      duration: 3000,
      verticalPosition: 'bottom',
          horizontalPosition:'right',
         panelClass:['mat-snackbar-white']
      
    });
  }

  
}


