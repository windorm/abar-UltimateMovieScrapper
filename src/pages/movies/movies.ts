import { DetailsPage } from '../details/details';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';

@IonicPage()
@Component({
  selector: 'page-movies',
  templateUrl: 'movies.html',
})
export class MoviesPage {

  movies: any;

  public isSearchbarOpened = false;
  constructor(public navCtrl: NavController, public restProvider: RestProvider) { }

  getMovies(event) {
    this.restProvider.getMovies(event.target.value)
        .then(data => {
          this.movies = data['Search'];
          console.log(this.movies);
        });
  }

  movieSelected(movie){
      console.log("click"+movie.get);
      this.navCtrl.push(DetailsPage,{movie:movie});
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad MoviesPage');
  }


}
