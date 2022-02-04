import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherDataService {
  result:any;

  constructor(public data:HttpClient) { }
  getdata(cityname:string):Observable<any>{
    var url = 'https://api.openweathermap.org/data/2.5/weather?q='+cityname+'&units=metric&appid=284a9239a736c79386472332a4de0628'
    return this.data.get<any>(url).pipe(catchError(this.handleError))
  }

  handleError(error:any){
      return throwError(error.message || "City not found!!")
  }
}
