import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  projects: any = [
    {
      userId: 123,
      username: 'mac',
      email: 'mac@email.com',
      name: 'Mac',
    },
    {
      userId: 234,
      username: 'john',
      email: 'john@doe.com',
      name: 'John Doe',
    },
    {
      userId: 345,
      username: 'jameer',
      email: 'jameer@email.com',
      name: 'Jameer',
    },
    {
      userId: 345,
      username: 'jameer',
      email: 'jameer@email.com',
      name: 'Jameer',
    },
    {
      userId: 345,
      username: 'jameer',
      email: 'jameer@email.com',
      name: 'Jameer',
    },
    {
      userId: 345,
      username: 'jameer',
      email: 'jameer@email.com',
      name: 'Jameer',
    },
    {
      userId: 345,
      username: 'jameer',
      email: 'jameer@email.com',
      name: 'Jameer',
    },
    {
      userId: 345,
      username: 'jameer',
      email: 'jameer@email.com',
      name: 'Jameer',
    },
    
  ];

  constructor() {
  
   }
 
  
  ngOnInit(): void {
  }

}
