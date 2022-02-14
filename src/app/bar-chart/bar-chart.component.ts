import { Component, OnInit } from '@angular/core';
import { WeatherDataService } from '../services/weather-data.service';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.scss']
})
export class BarChartComponent implements OnInit {
  scity=["Visakhapatnam","Hyderabad","Rajahmundry","Kurnool","Warangal","Vijayawada"];
  city:any;
  temps:any;
  sample:any;
  error:any;
  temp_list: String[] = [];
  loading = false;
  constructor(public weatherDataService:WeatherDataService) { }

  ngOnInit(): void {
    this.ongo()
  }

  ongo(){
    for(this.city in this.scity){
      this.loading = true;
      this.weatherDataService.getdata(this.scity[this.city]).subscribe(data=>{
        var obj = JSON.parse(JSON.stringify(data));
        this.temps = obj.main.temp;
        this.temp_list.push(this.temps);
      },)
      this.loading = false;
    }

  }

  barChartLabels:any = ['Vizag', 'Hyderabad', 'Rajahmundry', 'Kurnool', 'Warangal', 'Vijayawada']
  barChartData:any = [{
    label: 'Temperature of city',
    data:this.temp_list,
    backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)'
    ],
    borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)'
    ],
    color: [
      '#000'
    ],
    borderWidth: 1
  }]

}
