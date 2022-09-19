import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BodyComponent} from './Components/body/body.component';
import {FooterComponent} from './Components/footer/footer.component';



const routes: Routes = [
  {path:'navbar', component:FooterComponent, data:{animation:'isRight', position:[1.2, 0, 0]}},
  {path:'', component:BodyComponent, data:{animation:'isRight'}},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  
 }
