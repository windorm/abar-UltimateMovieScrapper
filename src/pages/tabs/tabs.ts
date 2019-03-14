import { SeriesPage } from './../series/series';
import { MoviesPage } from './../movies/movies';
import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { NewsPage } from '../news/news';
import { OthersPage } from '../others/others';

/**
 * Generated class for the TabsPage tabs.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html'
})
export class TabsPage {

  moviesRoot = MoviesPage
  seriesRoot = SeriesPage
  newsRoot = NewsPage
  othersRoot = OthersPage


  constructor(public navCtrl: NavController) {}

}
