import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import {MatSnackBar} from '@angular/material/snack-bar';


import { AngularFirestore,  } from '@angular/fire/compat/firestore';
import { AuthService } from '../../auth.service';
import { getAuth, signOut } from "firebase/auth";



@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  authState = getAuth()
  myForm: FormGroup |any;
  link :any;
  clinks:Array<any> =[];
  constructor(
              public authService: AuthService,
              private fb:FormBuilder, 
              private db: AngularFirestore,
              public snackBar: MatSnackBar,
              ) { }

  ngOnInit(): void {
    this.myForm = this.fb.group({
      cname:'',
      message:'',
      click:false
    })

    this.db.collection('CompanyReg').get()
    .forEach(collection => collection.docs.map(data => {
      this.clinks.push(data.data())
    }
    ))
    .catch(err => console.log(err))

    console.log(this.clinks)


  }

  checkAuth(){
    console.log(getAuth())
  }

  s(){
    console.log(signOut(this.authState))
  }


  async submitForm(){
   
    if(this.myForm.value.cname !== ''){
     this.db.collection('CompanyReg').add(this.myForm.value)
     .then((responce:any) => { 
      
       this.snackBar.open(`company Added successfully. ID ${responce.id}`, "🤘", {
         duration: 3000,
         verticalPosition: 'bottom',
             horizontalPosition:'right',
            panelClass:['mat-snackbar-white']
         
       });
       


       this.link = `${ window.location.origin}/${this.myForm.value.cname}?reg=${responce.id}`

       this.myForm.reset()
     })
     .catch(err => {
       this.snackBar.open(err, "", {
         duration: 3000,
         verticalPosition: 'bottom',
             horizontalPosition:'right',
            panelClass:['mat-snackbar-white']
         
       });
     })
    }
 
     
     // let data = await  this.message.
     // console.log(data)
    
   }
}
