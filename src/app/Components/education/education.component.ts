import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent implements OnInit {

  divfocus:boolean = false;
  constructor() { }

  ngOnInit(): void {
  }
  changefocus(){
    console.log(this.divfocus)
    this.divfocus = true
  }
}
