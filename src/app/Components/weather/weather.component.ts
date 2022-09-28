import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';


const API_URL = 'https://weatherapp-api-vercel.vercel.app'
const API_KEY = 'Ch0h2SiGKZW3cBHrFgGO'


@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {
  @Output() IpLocation = new EventEmitter<any>()
  WeatherData : any
  fail:boolean = false
  load:boolean = true
  constructor(public snackBar: MatSnackBar, ) { }

  ngOnInit(): void {
    fetch(`${API_URL}/byip?apikey=${API_KEY}`)
    .then(responce => responce.json())
    .then(data => {
      this.WeatherData = data
      this.IpLocation.emit(this.WeatherData.Ip)
      this.processData()
    })
    .catch(err => {
      console.error(err)
      this.fail = true;
    } )

    
  }

  getWeatherbycity(event:any){
    this.load = true
    fetch(`${API_URL}/weather/${event.target.value}?apikey=${API_KEY}`)
    .then(responce => responce.json())
    .then(data => {
      this.WeatherData = data
      
      this.processData()
      this.snackBar.open( `Tweeted current ${event.target.value} weather  `, "🦜", {
        duration: 3000,
        verticalPosition: 'bottom',
            horizontalPosition:'right',
           panelClass:['mat-snackbar-white']
        
      });
    })
    .catch(err => {
      console.error(err)
      this.fail = true;
    } )

  }

  processData(){
    this.WeatherData.Weather.isDay = this.WeatherData.Weather.dt >= this.WeatherData.Weather.sys.sunrise && this.WeatherData.Weather.dt <= this.WeatherData.Weather.sys.sunset
    this.load = false
    this.fail = false
  }

  alerterror(){
    alert("Your ip location name might be the problem")
  }
  

}
