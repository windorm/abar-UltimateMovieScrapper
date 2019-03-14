import { DetailsPage } from './../details/details';
import { showToast, mediasToCSVBase64, mediasToJsonBase64, download } from './../../app/utils/toast';
import { MediasModel } from './../../app/models/MediaModels';
import { FavoritesProvider } from './../../providers/favorites/favorites';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, PopoverController, Platform } from 'ionic-angular';
import { ExportPopoverPage } from "../export-popover/export-popover";
import { SocialSharing } from '@ionic-native/social-sharing';
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
  media: String = 'movies';

  constructor(public navCtrl: NavController, public navParams: NavParams, public favorite: FavoritesProvider, public toastController: ToastController, public popoverCtrl: PopoverController, public socialSharing: SocialSharing, public platform: Platform, public toast: ToastController) {
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

  showExportPopover(myEvent) {
    let popover = this.popoverCtrl.create(ExportPopoverPage, {
        download: this.shareFavorites.bind(this)
    });
    popover.present({
        ev: myEvent
    });
}

shareFavorites(format) {
    if(this.platform.is('core')) {
        showToast(this.toast, 'Your favorites list has been exported.');
        if (format === 'csv') {
            download('UMS_export.csv', mediasToCSVBase64(this.medias));
        } else {
            download('UMS_export.json', mediasToJsonBase64(this.medias));
        }
    } else {
        if (format === 'csv') {
            this.socialSharing.share('Look, this is my favorites movies and series !', 'Export my favorites', mediasToCSVBase64(this.medias))
        } else {
            this.socialSharing.share('Look, this is my favorites movies and series !', 'Export my favorites', mediasToJsonBase64(this.medias))
        }
    }
}
}
