import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BodyComponent} from './Components/body/body.component';
import {AdminComponent} from './Components/admin/admin.component'



const routes: Routes = [
  {path:'admin/:user', component:AdminComponent, data:{animation:'isRight', position:[1.2, 0, 0]}},
  {path:'', component:BodyComponent, data:{animation:'isRight'}},
  {path:':cname', component:BodyComponent, data:{animation:'isRight'}},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  
 }
