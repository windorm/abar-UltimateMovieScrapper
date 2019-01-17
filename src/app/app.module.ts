import { PipesModule } from './../pipes/pipes.module';
import { ExportPopoverPageModule } from './../pages/export-popover/export-popover.module';
import { DetailsPage } from './../pages/details/details';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { IonicStorageModule } from '@ionic/storage';
import { SocialSharing } from '@ionic-native/social-sharing';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { TabsPageModule } from '../pages/tabs/tabs.module';
import { MoviesPageModule } from '../pages/movies/movies.module';
import { SeriesPageModule } from '../pages/series/series.module';
import { NewsPageModule } from '../pages/news/news.module';
import { OthersPageModule } from '../pages/others/others.module';
import { DetailsPageModule } from '../pages/details/details.module';
import { RestProvider } from '../providers/rest/rest';
import { FavoritesProvider } from '../providers/favorites/favorites';
import { ExportPopoverPage } from "../pages/export-popover/export-popover";
import { SeasonpipePipe } from "../pipes/seasonpipe/seasonpipe";

@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    BrowserModule,
    TabsPageModule,
    MoviesPageModule,
    SeriesPageModule,
    NewsPageModule,
    OthersPageModule,
    HttpClientModule,
    DetailsPageModule,
    ExportPopoverPageModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    RestProvider,
    ExportPopoverPage,
    FavoritesProvider,
    SocialSharing
  ]
})
export class AppModule {}
