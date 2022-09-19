import { Component, OnInit } from '@angular/core';
const API_URL = 'https://weatherapp-api-vercel.vercel.app'
const API_KEY = 'Ch0h2SiGKZW3cBHrFgGO'


@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {

  WeatherData : any
  constructor() { }

  ngOnInit(): void {
    fetch(`${API_URL}/byip?apikey=${API_KEY}`)
    .then(responce => responce.json())
    .then(data => {
      this.WeatherData = data
      console.log(data)
      this.processData()
    })
    .catch(err => console.error(err))

    
  }

  processData(){
    let date = new Date(this.WeatherData.dt)
    console.log(date.getDate())
  }

  

}
