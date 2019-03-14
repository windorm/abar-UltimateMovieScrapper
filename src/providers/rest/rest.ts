import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class RestProvider {

  apiUrl = 'http://www.omdbapi.com/?apikey=75522b56';
  apiUrlImage = 'http://img.omdbapi.com/?apikey=75522b56';

  constructor(public http: HttpClient) {
    console.log('Hello RestServiceProvider Provider');
  }

  getMovies(event) {
    console.log(event);
    return new Promise(resolve => {
      this.http.get(this.apiUrl+'&s='+event+'&type=movie').subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }

  getSeries(event) {
    console.log(event);
    return new Promise(resolve => {
      this.http.get(this.apiUrl+'&s='+event+'&type=series').subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }

  getMovie(id) {
    console.log(id);
    return new Promise(resolve => {
      this.http.get(this.apiUrl+'&i='+id+'&plot=full').subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }

  getImage(id) {
    return new Promise(resolve => {
        this.http.get(this.apiUrlImage+'&h=600&i='+id)
        .subscribe(data => {
            resolve(data);
        }, err => {
            console.log(err);
        });
    });
}
}
