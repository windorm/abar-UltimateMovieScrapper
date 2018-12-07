import { DetailsPage } from './../details/details';
import { showToast } from './../../app/utils/toast';
import { MediasModel } from './../../app/models/MediaModels';
import { FavoritesProvider } from './../../providers/favorites/favorites';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
/**
 * Generated class for the NewsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-news',
  templateUrl: 'news.html',
})
export class NewsPage {

  medias: MediasModel[] = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public favorite: FavoritesProvider, public toastController: ToastController) {
  }

  ionViewDidLoad() {
      console.log('ionViewDidLoad NewsPage');

      this.favorite.onChange.subscribe((medias: MediasModel[]) => {
        this.medias = medias;
      }, console.error);
      this.favorite.load()
  }

  movieSelected(movie: MediasModel) {
      this.navCtrl.push(DetailsPage,{movie:movie});
  }
  removeMedia(medias: MediasModel) {
      this.favorite.removeMedia(medias);
      showToast(this.toastController, `${medias.Title} has been deleted from the list.`)
  }

}
