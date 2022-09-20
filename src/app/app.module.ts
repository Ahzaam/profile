import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Components
import { NavbarComponent } from './Components/navbar/navbar.component';
import {BodyComponent} from './Components/body/body.component'



// Material UI Modules API
// Tootbar
import {MatToolbarModule} from '@angular/material/toolbar';

// Mat icons
import {MatIconModule} from '@angular/material/icon';

// Button
import {MatButtonModule} from '@angular/material/button';

// Sise Nav
import {MatSidenavModule} from '@angular/material/sidenav';

// List Module
import {MatListModule} from '@angular/material/list';

// Spinner 
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { FooterComponent } from './Components/footer/footer.component';

import {MatInputModule} from '@angular/material/input';
import {MatGridListModule} from '@angular/material/grid-list';
import { WeatherComponent } from './Components/weather/weather.component';
import { HeroComponent } from './Components/hero/hero.component';
import { ProjectsComponent } from './Components/projects/projects.component';
import { ContactComponent } from './Components/contact/contact.component';
import { TeamComponent } from './Components/team/team.component';
import { AboutComponent } from './Components/about/about.component';
import { DialogComponent } from './Components/dialog/dialog.component';

import {MatSnackBarModule} from '@angular/material/snack-bar';
import { EducationComponent } from './Components/education/education.component';
import { ReactiveFormsModule } from '@angular/forms';


// Firebase Config

import { environment } from "src/environments/environment";
import { AngularFireModule } from "@angular/fire/compat";
import { FirestoreModule } from "@angular/fire/firestore";


// Three JS component
// import { NgtCanvas } from '@angular-three/core';
// import {NgtMesh, NgtBoxGeometry, NgtMeshStandardMaterial} from '@angular-three/schematics'
// import { NgtMeshStandardMaterial} from '@angular-three/core/materials'
// import { NgtMesh } from '@angular-three/core/meshes';
// import { NgtBoxGeometry,} from '@angular-three/core/geometries'
// import {
//   NgtSpotLight,
//   NgtPointLight,
//   NgtAmbientLight,
// } from '@angular-three/core/lights';
// import { NgtMeshBasicMaterial } from '@angular-three/core/materials';

// import { NgtCanvasModule } from "@angular-three/core";
// import { NgtMeshModule } from "@angular-three/core/meshes";
// import { NgtBoxGeometryModule } from "@angular-three/core/geometries";
// import { NgtMeshBasicMaterialModule } from "@angular-three/core/materials";
// import { NgtLineDashedMaterial } from "@angular-three/core/materials"



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BodyComponent,
    WeatherComponent,
    HeroComponent,
    FooterComponent,
    ProjectsComponent,
    ContactComponent,
    TeamComponent,
    AboutComponent,
    DialogComponent,
    EducationComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatProgressSpinnerModule,
    MatInputModule,
    MatGridListModule,
    MatSnackBarModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    FirestoreModule,
  
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  
}
