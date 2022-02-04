import { Component, OnInit } from '@angular/core';
import { WeatherDataService } from '../services/weather-data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  city="";
  scity="";
  humidity="";
  feelslike="";
  min_temp="";
  max_temp="";
  pressure="";
  temps:any;
  error:any;
  loading = false;

  constructor(public weatherDataService:WeatherDataService) { };

  ngOnInit(): void {
    this.scity = "Visakhapatnam";
    this.ongo();
  }

  ongo(){
    this.loading = true;
    this.weatherDataService.getdata(this.scity).subscribe(data=>{
      console.log("data ",data);
      var obj = JSON.parse(JSON.stringify(data));
      this.temps = obj.main.temp;
      this.city = obj.name;
      this.humidity = obj.main.humidity;
      this.feelslike = obj.main.feels_like;
      this.min_temp = obj.main.temp_min;
      this.max_temp = obj.main.temp_max;
      this.pressure = obj.main.pressure;
    },(error) => {
      console.log(error)
      alert("The City which you entered does not exist!!")
      this.error = error
    })
    this.loading = false;
  }

}
