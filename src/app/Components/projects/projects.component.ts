import { Component, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  array :any
  constructor(private render:Renderer2) {
  
   }
 
  
  ngOnInit(): void {
  }


  openDes(event:any){
    
    this.array = event.target.parentNode.parentNode.parentNode.parentNode.parentNode
    console.log(this.array, event.target.id)
    if(!this.array.classList.contains('open')){
    
      this.render.addClass(this.array ,"open")
      this.render.removeClass(this.array ,"close")
    }else{
      this.render.removeClass(this.array ,"open")
      this.render.addClass(this.array ,"close")
    }
    
  }
  
 
}
