import { FavoritesProvider } from './../../providers/favorites/favorites';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';
import { SocialSharing } from '@ionic-native/social-sharing';
/**
 * Generated class for the DetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-details',
  templateUrl: 'details.html',
})
export class DetailsPage {

  movie: any;
  id: any;
  image: any;
  urlHDimage:any;
  seasonsList: boolean = false;

  constructor(public navCtrl: NavController, public navParams: NavParams, public restProvider: RestProvider, public FavoritesProvider: FavoritesProvider, public socialSharing: SocialSharing) {
    let movie = this.navParams.get('movie');
    this.movie = movie;
    this.id = movie.imdbID;
    this.getMovie(this.id);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailsPage');
  }

  getMovie(id) {
    this.restProvider.getMovie(id)
        .then(data => {
          this.movie = data;
          console.log(this.movie);
        });
  }

  getImage(id) {
    this.restProvider.getImage(id)
        .then(image => {
            console.log(this.image);
        });
}

addToFavorites(){
    this.FavoritesProvider.addMedia(this.movie);
}

openSeasonList(){
  this.seasonsList = true;
}

shareImageHD(image){
  this.socialSharing.share(null, null, image);
}
}
