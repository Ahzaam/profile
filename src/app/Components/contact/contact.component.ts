import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import {MatSnackBar} from '@angular/material/snack-bar';
import { AngularFirestore, AngularFirestoreDocument  } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  myForm: FormGroup |any;


  constructor(private fb:FormBuilder, private db: AngularFirestore,public snackBar: MatSnackBar ) {
    
    }
  
  // private firestore: AngularFirestore 
  ngOnInit(): void {
    this.myForm = this.fb.group({
      name:'',
      email:'',
      message:'',
      read:false
    })

    // this.myForm.valueChanges.subscribe(console.log)
   
  }

  

  async submitForm(){
   
   if(this.myForm.value.message !== ''){
    this.db.collection('Message').add(this.myForm.value)
    .then((responce:any) => { 
     
      this.snackBar.open(`Message sent successfully. Thank you ${this.myForm.value.name}`, "🤘", {
        duration: 3000,
        verticalPosition: 'bottom',
            horizontalPosition:'right',
           panelClass:['mat-snackbar-white']
        
      });
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

 


  createCoffeeOrder(data:any) {
    // this.collect = this.firestore.doc('/countryList/colombia');
    // console.log(this.collect)
    return new Promise<any>((resolve, reject) =>{
      
    });
}
}
