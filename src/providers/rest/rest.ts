import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class RestProvider {

  apiUrl = 'http://www.omdbapi.com/?apikey=75522b56';

  constructor(public http: HttpClient) {
    console.log('Hello RestServiceProvider Provider');
  }

  getMovies(event) {
    console.log(event);
    return new Promise(resolve => {
      this.http.get(this.apiUrl+'&s='+event).subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }

  getMovie(id) {
    console.log(id);
    return new Promise(resolve => {
      this.http.get(this.apiUrl+'&i='+id).subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }
}
