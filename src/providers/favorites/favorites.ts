import { MediasModel } from './../../app/models/MediaModels';
import { Injectable, EventEmitter } from '@angular/core';
import { Storage } from '@ionic/storage';
/*
  Generated class for the FavoritesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class FavoritesProvider {

  private medias: Map<string, MediasModel> = new Map();
  public onChange: EventEmitter<MediasModel[]> = new EventEmitter();

  constructor(private storage: Storage) {
      console.log('Hello StorageProvider Provider');
      this.init();
  }

  addMedia(media: MediasModel) {
      this.medias.set(media.imdbID, media);
      this.storage.set('users_medias', this.medias);
      this.onChange.emit(Array.from(this.medias.values()));
  }

  removeMedia(media: MediasModel) {
      this.medias.delete(media.imdbID);
      this.storage.set('users_medias', this.medias);
      this.onChange.emit(Array.from(this.medias.values()));
  }

  private async init() {
      try {
          const medias = await this.storage.get('user_medias');
          if (medias !== null && medias instanceof Map) {
              this.medias = new Map<string, MediasModel>(medias);
              this.onChange.emit(Array.from(this.medias.values()));
          } else {
              this.medias = new Map();
          }
      } catch (err) {
          console.log(err)
      }
  }

  public load() {
      this.onChange.emit(Array.from(this.medias.values()));
  }

}
