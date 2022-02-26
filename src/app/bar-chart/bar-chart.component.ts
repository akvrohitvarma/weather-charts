import { Component, OnInit } from '@angular/core';
import { forkJoin } from 'rxjs';
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
    //this.ongo()
    this.ongo_fork()
  }

  // ongo(){
  //   for(this.city in this.scity){
  //     this.loading = true;
  //     this.weatherDataService.getdata(this.scity[this.city]).subscribe(data=>{
  //       var obj = JSON.parse(JSON.stringify(data));
  //       this.temps = obj.main.temp;
  //       this.temp_list.push(this.temps);
  //     },)
  //     this.loading = false;
  //   }
  //   console.log(this.temp_list);

  // }

  ongo_fork(){
    this.loading = true;
    forkJoin([
      this.weatherDataService.getdata('Visakhapatnam'),
      this.weatherDataService.getdata('Hyderabad'),
      this.weatherDataService.getdata("Rajahmundry"),
      this.weatherDataService.getdata("Kurnool"),
      this.weatherDataService.getdata("Warangal"),
      this.weatherDataService.getdata("Vijayawada")
    ]).subscribe(data => {
      var str = JSON.parse(JSON.stringify(data));
        this.temps = str[0].main.temp;
        this.temp_list.push(this.temps);
        this.temps = str[1].main.temp;
        this.temp_list.push(this.temps);
        this.temps = str[2].main.temp;
        this.temp_list.push(this.temps);
        this.temps = str[3].main.temp;
        this.temp_list.push(this.temps);
        this.temps = str[4].main.temp;
        this.temp_list.push(this.temps);
        this.temps = str[5].main.temp;
        this.temp_list.push(this.temps);
        console.log(this.temp_list);
    })
    this.loading = false;
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
