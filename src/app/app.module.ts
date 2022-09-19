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
   
  
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  
}
