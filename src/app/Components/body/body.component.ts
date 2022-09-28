import { Component, OnInit } from '@angular/core';
import {fader } from '../../route-animations';
import { ActivatedRoute} from '@angular/router';
import { AngularFirestore} from '@angular/fire/compat/firestore';



@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss'],
  
})
export class BodyComponent implements OnInit {
  docid:any = undefined;
  cname:any;
  message:any;
  data:any = null;

  load = true
  error = false

  cdocid :any;

  constructor(public route : ActivatedRoute,private db : AngularFirestore) { }
  

  ngOnInit(): void {
    this.route.params.subscribe(parameters => {
      this.cname = parameters['cname']
    })

    this.route.queryParams.subscribe(qparams => {
      this.docid = qparams['reg']
    })


    if(this.docid !== undefined){
      this.load = false
      this.db.collection('CompanyReg').doc(this.docid).get()
      .forEach(result => {
        this.data = result.data()
        this.load = true
      })
      .catch(err => {
        this.error = true
        console.log(err)
      })

    }

  }

  event(event:any){
    
  if(this.docid !== undefined){
    
    this.db.collection('CompanyReg').doc(this.docid).update({'click':true, 'ipdata':event} )
    .catch(err => console.log(err))
    this.cdocid = this.docid
 
  }
    
  }

}
