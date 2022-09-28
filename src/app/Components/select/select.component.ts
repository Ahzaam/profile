import { Component, Input, OnInit } from "@angular/core";
import { AngularFirestore} from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent implements OnInit {
  @Input() regData:any = '' 
  @Input() cdocid:any = undefined
  
  select = false
  marked = false
  constructor(private db:AngularFirestore) { }

  ngOnInit(): void {



  }

  counter(i: number) {
    return new Array(i);
}

selected(){

  this.saveEventData(true)
 
  this.select = true
  this.marked = true
}

notSelected(){
  this.marked = true
  this.saveEventData(false)
}
  
saveEventData(state:boolean){
  this.db.collection('CompanyReg').doc(this.cdocid).update({selected:state})
  .catch(err => console.log(err))
}

}





