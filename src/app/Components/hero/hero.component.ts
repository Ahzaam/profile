import { Component, OnInit } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';
@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit {

  constructor(public snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }
  


  cvDownload = () =>{
    console.log("Mat snack Bar.....")
    this.snackBar.open("File Downloaded", "", {
      duration: 3000,
      verticalPosition: 'bottom',
          horizontalPosition:'right',
         panelClass:['mat-snackbar-white']
      
    });
  }

  
}


