import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
// import { fader} from './route-animations'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations:[
    // fader,
    // slider,
    // transformer,
    // stepper,
  ]
})
export class AppComponent {
  title = 'profile';
  prepareRoute(outlet: RouterOutlet) {
    return outlet &&  outlet.activatedRouteData && outlet.activatedRouteData['animation'];
   }
}
