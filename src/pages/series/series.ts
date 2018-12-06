import { DetailsPage } from '../details/details';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';

/**
 * Generated class for the SeriesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-series',
  templateUrl: 'series.html',
})
export class SeriesPage {

  movies: any;

  constructor(public navCtrl: NavController, public restProvider: RestProvider) { }

  getSeries(event) {
    this.restProvider.getSeries(event.target.value)
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
    console.log('ionViewDidLoad SeriesPage');
  }

}