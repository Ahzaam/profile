import { Component, OnInit } from '@angular/core';
import { NgtRenderState } from '@angular-three/core';
import { Mesh } from 'three';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
 
  constructor() { }

  ngOnInit(): void {
  }
  hovered = false;
  active = false;

  onCubeBeforeRender($event: { state: NgtRenderState; object: Mesh }) {
  
    const cube = $event.object;
    // we are rotating our cube little by little before it gets rendered
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
  
  }
  
}
