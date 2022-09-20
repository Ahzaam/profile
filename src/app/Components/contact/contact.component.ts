import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AngularFireDatabase} from '@angular/fire/compat/database';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  myForm: FormGroup |any;
  message: any;

  constructor(private fb:FormBuilder, private db: AngularFireDatabase ) {
    
    }
  
  // private firestore: AngularFirestore 
  ngOnInit(): void {
    this.myForm = this.fb.group({
      name:'',
      email:'',
      message:'',
      read:'false'
    })

    // this.myForm.valueChanges.subscribe(console.log)
    this.message = this.db.object('Message')
  }

  

  async submitForm(){
    console.log(this.myForm.value)
    
   this.message.set(this.myForm.value)
   .then((responce: any) => console.log(responce))
   .catch((err:any) => console.log(err))
   
  }

 


  createCoffeeOrder(data:any) {
    // this.collect = this.firestore.doc('/countryList/colombia');
    // console.log(this.collect)
    return new Promise<any>((resolve, reject) =>{
      
    });
}
}
