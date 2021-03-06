webpackJsonp([0],{

/***/ 113:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 113;

/***/ }),

/***/ 156:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/details/details.module": [
		157
	],
	"../pages/movies/movies.module": [
		160
	],
	"../pages/news/news.module": [
		162
	],
	"../pages/others/others.module": [
		164
	],
	"../pages/series/series.module": [
		166
	],
	"../pages/tabs/tabs.module": [
		168
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 156;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 157:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailsPageModule", function() { return DetailsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__details__ = __webpack_require__(46);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var DetailsPageModule = /** @class */ (function () {
    function DetailsPageModule() {
    }
    DetailsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__details__["a" /* DetailsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__details__["a" /* DetailsPage */]),
            ],
        })
    ], DetailsPageModule);
    return DetailsPageModule;
}());

//# sourceMappingURL=details.module.js.map

/***/ }),

/***/ 160:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MoviesPageModule", function() { return MoviesPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__movies__ = __webpack_require__(161);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MoviesPageModule = /** @class */ (function () {
    function MoviesPageModule() {
    }
    MoviesPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__movies__["a" /* MoviesPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__movies__["a" /* MoviesPage */]),
            ],
        })
    ], MoviesPageModule);
    return MoviesPageModule;
}());

//# sourceMappingURL=movies.module.js.map

/***/ }),

/***/ 161:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MoviesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__details_details__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_rest_rest__ = __webpack_require__(47);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MoviesPage = /** @class */ (function () {
    function MoviesPage(navCtrl, restProvider) {
        this.navCtrl = navCtrl;
        this.restProvider = restProvider;
        this.isSearchbarOpened = false;
    }
    MoviesPage.prototype.getMovies = function (event) {
        var _this = this;
        this.restProvider.getMovies(event.target.value)
            .then(function (data) {
            _this.movies = data['Search'];
            console.log(_this.movies);
        });
    };
    MoviesPage.prototype.movieSelected = function (movie) {
        console.log("click" + movie.get);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_0__details_details__["a" /* DetailsPage */], { movie: movie });
    };
    MoviesPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MoviesPage');
    };
    MoviesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-movies',template:/*ion-inline-start:"/Users/arnaud-barriol/abar-UltimateMovieScrapper/src/pages/movies/movies.html"*/'<ion-header>\n    <ion-navbar color=\'dark\'>\n      <ion-title>\n          <ion-icon name="film"></ion-icon> Movies\n      </ion-title>\n      <ion-searchbar *ngIf="isSearchbarOpened" (ionInput)="getMovies($event)" showCancelButton="true" (ionCancel)="isSearchbarOpened=false">\n        </ion-searchbar>\n      <ion-buttons end>\n        <button ion-button icon-only *ngIf="!isSearchbarOpened" (click)="isSearchbarOpened=true">\n        <ion-icon name="search"></ion-icon>\n      </button>\n      </ion-buttons>\n      </ion-navbar>\n  </ion-header>\n\n<ion-content padding class=\'page-content\'>\n\n  <ion-grid>\n    <ion-row>\n      <ion-col col-6 col-md-4 col-lg-2 *ngFor=\'let movie of movies\' >\n\n    <ion-card class=\'card\'  class="movie-info" (click)="movieSelected(movie)">\n\n      <ion-card-title #popoverText  class="card-title">\n        {{movie.Title}}\n      </ion-card-title>\n\n      <img src="{{movie.Poster}}">\n\n      <div class="card-subtitle">\n        <ion-row>\n          <ion-col>\n              <ion-icon name="calendar"></ion-icon>\n              <div>{{movie.Year}}</div>\n          </ion-col>\n        </ion-row>\n      </div>\n\n    </ion-card>\n\n\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n</ion-content>\n'/*ion-inline-end:"/Users/arnaud-barriol/abar-UltimateMovieScrapper/src/pages/movies/movies.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__providers_rest_rest__["a" /* RestProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__providers_rest_rest__["a" /* RestProvider */]) === "function" && _b || Object])
    ], MoviesPage);
    return MoviesPage;
    var _a, _b;
}());

//# sourceMappingURL=movies.js.map

/***/ }),

/***/ 162:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsPageModule", function() { return NewsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__news__ = __webpack_require__(163);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var NewsPageModule = /** @class */ (function () {
    function NewsPageModule() {
    }
    NewsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__news__["a" /* NewsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__news__["a" /* NewsPage */]),
            ],
        })
    ], NewsPageModule);
    return NewsPageModule;
}());

//# sourceMappingURL=news.module.js.map

/***/ }),

/***/ 163:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__details_details__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_utils_toast__ = __webpack_require__(265);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_favorites_favorites__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the NewsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var NewsPage = /** @class */ (function () {
    function NewsPage(navCtrl, navParams, favorite, toastController) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.favorite = favorite;
        this.toastController = toastController;
        this.medias = [];
    }
    NewsPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad NewsPage');
        this.favorite.onChange.subscribe(function (medias) {
            _this.medias = medias;
        }, console.error);
        this.favorite.load();
    };
    NewsPage.prototype.movieSelected = function (movie) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_0__details_details__["a" /* DetailsPage */], { movie: movie });
    };
    NewsPage.prototype.removeMedia = function (medias) {
        this.favorite.removeMedia(medias);
        Object(__WEBPACK_IMPORTED_MODULE_1__app_utils_toast__["a" /* showToast */])(this.toastController, medias.Title + " has been deleted from the list.");
    };
    NewsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["m" /* Component */])({
            selector: 'page-news',template:/*ion-inline-start:"/Users/arnaud-barriol/abar-UltimateMovieScrapper/src/pages/news/news.html"*/'<ion-header>\n    <ion-navbar color=\'dark\'>\n      <ion-title>\n          <ion-icon name="bookmark"></ion-icon> Favorites\n      </ion-title>\n      <ion-segment>\n          <ion-segment-button value="all">\n            All\n            </ion-segment-button>\n          <ion-segment-button value="movies">\n            Movies\n          </ion-segment-button>\n          <ion-segment-button value="series">\n            Series\n          </ion-segment-button>\n        </ion-segment>\n    </ion-navbar>\n  </ion-header>\n\n\n<ion-content padding>\n\n  <div>\n    <ion-list>\n        <ion-list *ngIf="medias.length >= 1">\n            <ion-row>\n                <ion-col text-center>\n                  <button round color=\'dark\' ion-button icon-start>\n                    <ion-icon name="cloud-upload"></ion-icon>\n                    CSV\n                  </button>\n                  <button round color=\'dark\' ion-button icon-start>\n                  <ion-icon name="cloud-upload"></ion-icon>\n                    JSON\n                  </button>\n                  <button round color=\'dark\' ion-button>\n                  <ion-icon name="cloud-download"></ion-icon>\n                    \n                  </button>\n              </ion-col>\n            </ion-row>\n            <ion-item #item *ngFor="let media of medias; let i = index">\n                <ion-item (click)="movieSelected(media)">\n                    <ion-thumbnail item-start>\n                        <img src="{{media.Poster}}" style="width: auto;">\n                    </ion-thumbnail>\n                    <h2><strong>{{media.Title}}</strong></h2>\n                    <p>{{media.Year}}</p> \n                    <button ion-button clear large round color="dark"  item-end (click)="removeMedia(media)">\n                      <ion-icon name="close"></ion-icon>\n                    </button>\n                </ion-item>\n            </ion-item>\n        </ion-list>\n    </ion-list>\n  </div>\n\n</ion-content>\n'/*ion-inline-end:"/Users/arnaud-barriol/abar-UltimateMovieScrapper/src/pages/news/news.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["e" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["e" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["f" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["f" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__providers_favorites_favorites__["a" /* FavoritesProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_favorites_favorites__["a" /* FavoritesProvider */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["h" /* ToastController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["h" /* ToastController */]) === "function" && _d || Object])
    ], NewsPage);
    return NewsPage;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=news.js.map

/***/ }),

/***/ 164:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OthersPageModule", function() { return OthersPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__others__ = __webpack_require__(165);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var OthersPageModule = /** @class */ (function () {
    function OthersPageModule() {
    }
    OthersPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__others__["a" /* OthersPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__others__["a" /* OthersPage */]),
            ],
        })
    ], OthersPageModule);
    return OthersPageModule;
}());

//# sourceMappingURL=others.module.js.map

/***/ }),

/***/ 165:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OthersPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the OthersPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var OthersPage = /** @class */ (function () {
    function OthersPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    OthersPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad OthersPage');
    };
    OthersPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-others',template:/*ion-inline-start:"/Users/arnaud-barriol/abar-UltimateMovieScrapper/src/pages/others/others.html"*/'<!--\n  Generated template for the OthersPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Others</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/Users/arnaud-barriol/abar-UltimateMovieScrapper/src/pages/others/others.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], OthersPage);
    return OthersPage;
}());

//# sourceMappingURL=others.js.map

/***/ }),

/***/ 166:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SeriesPageModule", function() { return SeriesPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__series__ = __webpack_require__(167);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SeriesPageModule = /** @class */ (function () {
    function SeriesPageModule() {
    }
    SeriesPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__series__["a" /* SeriesPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__series__["a" /* SeriesPage */]),
            ],
        })
    ], SeriesPageModule);
    return SeriesPageModule;
}());

//# sourceMappingURL=series.module.js.map

/***/ }),

/***/ 167:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SeriesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__details_details__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_rest_rest__ = __webpack_require__(47);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the SeriesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SeriesPage = /** @class */ (function () {
    function SeriesPage(navCtrl, restProvider) {
        this.navCtrl = navCtrl;
        this.restProvider = restProvider;
        this.isSearchbarOpened = false;
    }
    SeriesPage.prototype.getSeries = function (event) {
        var _this = this;
        this.restProvider.getSeries(event.target.value)
            .then(function (data) {
            _this.movies = data['Search'];
            console.log(_this.movies);
        });
    };
    SeriesPage.prototype.movieSelected = function (movie) {
        console.log("click" + movie.get);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_0__details_details__["a" /* DetailsPage */], { movie: movie });
    };
    SeriesPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SeriesPage');
    };
    SeriesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-series',template:/*ion-inline-start:"/Users/arnaud-barriol/abar-UltimateMovieScrapper/src/pages/series/series.html"*/'<ion-header>\n    <ion-navbar color=\'dark\'>\n      <ion-title>\n          <ion-icon name="albums"></ion-icon> Series\n      </ion-title>\n      <ion-searchbar *ngIf="isSearchbarOpened" (ionInput)="getSeries($event)" showCancelButton="true" (ionCancel)="isSearchbarOpened=false">\n        </ion-searchbar>\n      <ion-buttons end>\n        <button ion-button icon-only *ngIf="!isSearchbarOpened" (click)="isSearchbarOpened=true">\n        <ion-icon name="search"></ion-icon>\n      </button>\n      </ion-buttons>\n      </ion-navbar>\n  </ion-header>\n  \n  <ion-content padding class=\'page-content\'>\n  \n    <ion-grid>\n      <ion-row>\n        <ion-col col-6 col-md-4 col-lg-2 *ngFor=\'let movie of movies\' >\n  \n      <ion-card class=\'card\'  class="movie-info" (click)="movieSelected(movie)">\n  \n        <ion-card-title #popoverText  class="card-title">\n          {{movie.Title}}\n        </ion-card-title>\n  \n        <img src="{{movie.Poster}}">\n  \n        <div class="card-subtitle">\n          <ion-row>\n            <ion-col>\n                <ion-icon name="calendar"></ion-icon>\n                <div>{{movie.Year}}</div>\n            </ion-col>\n          </ion-row>\n        </div>\n  \n      </ion-card>\n  \n  \n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  \n  </ion-content>\n  '/*ion-inline-end:"/Users/arnaud-barriol/abar-UltimateMovieScrapper/src/pages/series/series.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__providers_rest_rest__["a" /* RestProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__providers_rest_rest__["a" /* RestProvider */]) === "function" && _b || Object])
    ], SeriesPage);
    return SeriesPage;
    var _a, _b;
}());

//# sourceMappingURL=series.js.map

/***/ }),

/***/ 168:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsPageModule", function() { return TabsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tabs__ = __webpack_require__(169);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var TabsPageModule = /** @class */ (function () {
    function TabsPageModule() {
    }
    TabsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__tabs__["a" /* TabsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__tabs__["a" /* TabsPage */]),
            ]
        })
    ], TabsPageModule);
    return TabsPageModule;
}());

//# sourceMappingURL=tabs.module.js.map

/***/ }),

/***/ 169:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__series_series__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__movies_movies__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__news_news__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__others_others__ = __webpack_require__(165);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the TabsPage tabs.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TabsPage = /** @class */ (function () {
    function TabsPage(navCtrl) {
        this.navCtrl = navCtrl;
        this.moviesRoot = __WEBPACK_IMPORTED_MODULE_1__movies_movies__["a" /* MoviesPage */];
        this.seriesRoot = __WEBPACK_IMPORTED_MODULE_0__series_series__["a" /* SeriesPage */];
        this.newsRoot = __WEBPACK_IMPORTED_MODULE_4__news_news__["a" /* NewsPage */];
        this.othersRoot = __WEBPACK_IMPORTED_MODULE_5__others_others__["a" /* OthersPage */];
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["m" /* Component */])({
            selector: 'page-tabs',template:/*ion-inline-start:"/Users/arnaud-barriol/abar-UltimateMovieScrapper/src/pages/tabs/tabs.html"*/'<ion-tabs color="dark">\n    <ion-tab [root]="moviesRoot" tabTitle="Movies" tabIcon="film"></ion-tab>\n    <ion-tab [root]="seriesRoot" tabTitle="Series" tabIcon="albums"></ion-tab>\n    <ion-tab [root]="newsRoot" tabTitle="Favorites" tabIcon="bookmark"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"/Users/arnaud-barriol/abar-UltimateMovieScrapper/src/pages/tabs/tabs.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["e" /* NavController */]])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 213:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(234);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 234:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_storage__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__(290);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_home_home__ = __webpack_require__(291);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_tabs_tabs_module__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_movies_movies_module__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_series_series_module__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_news_news_module__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_others_others_module__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_details_details_module__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__providers_rest_rest__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__providers_favorites_favorites__ = __webpack_require__(80);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_8__pages_home_home__["a" /* HomePage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_9__pages_tabs_tabs_module__["TabsPageModule"],
                __WEBPACK_IMPORTED_MODULE_10__pages_movies_movies_module__["MoviesPageModule"],
                __WEBPACK_IMPORTED_MODULE_11__pages_series_series_module__["SeriesPageModule"],
                __WEBPACK_IMPORTED_MODULE_12__pages_news_news_module__["NewsPageModule"],
                __WEBPACK_IMPORTED_MODULE_13__pages_others_others_module__["OthersPageModule"],
                __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_14__pages_details_details_module__["DetailsPageModule"],
                __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/details/details.module#DetailsPageModule', name: 'DetailsPage', segment: 'details', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/movies/movies.module#MoviesPageModule', name: 'MoviesPage', segment: 'movies', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/news/news.module#NewsPageModule', name: 'NewsPage', segment: 'news', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/others/others.module#OthersPageModule', name: 'OthersPage', segment: 'others', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/series/series.module#SeriesPageModule', name: 'SeriesPage', segment: 'series', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tabs/tabs.module#TabsPageModule', name: 'TabsPage', segment: 'tabs', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_6__ionic_storage__["a" /* IonicStorageModule */].forRoot()
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_8__pages_home_home__["a" /* HomePage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_2__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["b" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_15__providers_rest_rest__["a" /* RestProvider */],
                __WEBPACK_IMPORTED_MODULE_16__providers_favorites_favorites__["a" /* FavoritesProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 265:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return showToast; });
var showToast = function (toastCtrl, message) {
    var toast = toastCtrl.create({
        message: message,
        duration: 3000,
        position: 'top'
    });
    toast.present();
};
//# sourceMappingURL=toast.js.map

/***/ }),

/***/ 290:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(169);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/arnaud-barriol/abar-UltimateMovieScrapper/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/arnaud-barriol/abar-UltimateMovieScrapper/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 291:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomePage = /** @class */ (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/arnaud-barriol/abar-UltimateMovieScrapper/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Ionic Blank\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  The world is your oyster.\n  <p>\n    If you get lost, the <a href="http://ionicframework.com/docs/v2">docs</a> will be your guide.\n  </p>\n</ion-content>\n'/*ion-inline-end:"/Users/arnaud-barriol/abar-UltimateMovieScrapper/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 46:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_favorites_favorites__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_rest_rest__ = __webpack_require__(47);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the DetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DetailsPage = /** @class */ (function () {
    function DetailsPage(navCtrl, navParams, restProvider, FavoritesProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.restProvider = restProvider;
        this.FavoritesProvider = FavoritesProvider;
        var movie = this.navParams.get('movie');
        this.movie = movie;
        this.id = movie.imdbID;
        this.getMovie(this.id);
    }
    DetailsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DetailsPage');
    };
    DetailsPage.prototype.getMovie = function (id) {
        var _this = this;
        this.restProvider.getMovie(id)
            .then(function (data) {
            _this.movie = data;
            console.log(_this.movie);
        });
    };
    DetailsPage.prototype.getImage = function (id) {
        var _this = this;
        this.restProvider.getImage(id)
            .then(function (image) {
            console.log(_this.image);
        });
    };
    DetailsPage.prototype.addToFavorites = function () {
        this.FavoritesProvider.addMedia(this.movie);
    };
    DetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-details',template:/*ion-inline-start:"/Users/arnaud-barriol/abar-UltimateMovieScrapper/src/pages/details/details.html"*/'<ion-header class=\'de\'>\n\n  <ion-navbar color=\'dark\'>\n    <ion-title>\n      {{movie.Title}}\n    </ion-title>\n  </ion-navbar>\n\n</ion-header>\n  \n\n\n    <ion-content class=\'page-content\' padding>\n\n      <ion-card *ngIf="this.movie; let movie">\n        <img src="{{movie.Poster}}">\n        <ion-row>\n        <ion-col text-center>\n            <button ion-button clear small color="danger" icon-start >\n              <ion-icon name=\'image\'></ion-icon>\n              HD Poster\n            </button>\n          </ion-col>\n        </ion-row>\n    \n        <div class="card-subtitle">\n          <ion-list>\n            <ion-item class="item-info">\n              <ion-badge class="badge-info" item-start>{{movie.Genre}}</ion-badge>\n            </ion-item>\n            <ion-item class="item-info">\n              <ion-badge  item-start class="badge-info">{{movie.Director}}</ion-badge>\n            </ion-item>\n            <ion-item class="item-info">\n              <ion-badge  item-start class="badge-info">{{movie.Actors}}</ion-badge>\n            </ion-item>\n          </ion-list>\n    \n          <ion-row class="small-padding">\n              <ion-col>\n                  <button ion-button clear small color="danger" icon-start>\n                    <ion-icon name=\'trophy\'></ion-icon>\n                    <strong>{{movie.Awards}}</strong>\n                  </button>\n                </ion-col>\n            <ion-col>\n              <button ion-button clear small color="danger" icon-start>\n                <ion-icon name=\'star-half\'></ion-icon>\n                <strong>{{movie.imdbRating}}/10</strong><i>({{movie.imdbVotes}}votes)</i>\n              </button>\n            </ion-col>\n            <ion-col>\n              <button ion-button clear small color="danger" icon-start>\n                <ion-icon name=\'calendar\'></ion-icon>\n              <strong>{{movie.Released}}</strong><i>({{movie.Runtime}}S)</i>\n              </button>\n            </ion-col>\n            <ion-col>\n              <button ion-button clear small color="danger" icon-start>\n                <ion-icon name=\'close-circle\'></ion-icon>\n                {{movie.Rated}}\n              </button>\n            </ion-col>\n          </ion-row>\n        </div>\n        <ion-card-content>\n          {{movie.Plot}}\n        </ion-card-content>\n    \n        <ion-row>\n            <ion-col text-left>\n                <button (click)="addToFavorites(movie)" ion-button clear small color="danger" icon-start>\n                  <ion-icon name=\'bookmark\'></ion-icon>\n                  Add To Favorites\n                </button>\n              </ion-col>\n              \n          <ion-col text-right>\n            <a href="{{movie.Website}}" ion-button clear small color="danger" icon-start>\n              <ion-icon name=\'link\'></ion-icon>\n              Get More Details\n            </a>\n          </ion-col>\n        </ion-row>\n    \n      </ion-card>\n    \n    </ion-content>\n    \n'/*ion-inline-end:"/Users/arnaud-barriol/abar-UltimateMovieScrapper/src/pages/details/details.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_rest_rest__["a" /* RestProvider */], __WEBPACK_IMPORTED_MODULE_0__providers_favorites_favorites__["a" /* FavoritesProvider */]])
    ], DetailsPage);
    return DetailsPage;
}());

//# sourceMappingURL=details.js.map

/***/ }),

/***/ 47:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RestProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RestProvider = /** @class */ (function () {
    function RestProvider(http) {
        this.http = http;
        this.apiUrl = 'http://www.omdbapi.com/?apikey=75522b56';
        this.apiUrlImage = 'http://img.omdbapi.com/?apikey=75522b56';
        console.log('Hello RestServiceProvider Provider');
    }
    RestProvider.prototype.getMovies = function (event) {
        var _this = this;
        console.log(event);
        return new Promise(function (resolve) {
            _this.http.get(_this.apiUrl + '&s=' + event + '&type=movie').subscribe(function (data) {
                resolve(data);
            }, function (err) {
                console.log(err);
            });
        });
    };
    RestProvider.prototype.getSeries = function (event) {
        var _this = this;
        console.log(event);
        return new Promise(function (resolve) {
            _this.http.get(_this.apiUrl + '&s=' + event + '&type=series').subscribe(function (data) {
                resolve(data);
            }, function (err) {
                console.log(err);
            });
        });
    };
    RestProvider.prototype.getMovie = function (id) {
        var _this = this;
        console.log(id);
        return new Promise(function (resolve) {
            _this.http.get(_this.apiUrl + '&i=' + id + '&plot=full').subscribe(function (data) {
                resolve(data);
            }, function (err) {
                console.log(err);
            });
        });
    };
    RestProvider.prototype.getImage = function (id) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get(_this.apiUrlImage + '&h=600&i=' + id)
                .subscribe(function (data) {
                resolve(data);
            }, function (err) {
                console.log(err);
            });
        });
    };
    RestProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], RestProvider);
    return RestProvider;
}());

//# sourceMappingURL=rest.js.map

/***/ }),

/***/ 80:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FavoritesProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_storage__ = __webpack_require__(158);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};


/*
  Generated class for the FavoritesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var FavoritesProvider = /** @class */ (function () {
    function FavoritesProvider(storage) {
        this.storage = storage;
        this.medias = new Map();
        this.onChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        console.log('Hello StorageProvider Provider');
        this.init();
    }
    FavoritesProvider.prototype.addMedia = function (media) {
        this.medias.set(media.imdbID, media);
        this.storage.set('users_medias', this.medias);
        this.onChange.emit(Array.from(this.medias.values()));
    };
    FavoritesProvider.prototype.removeMedia = function (media) {
        this.medias.delete(media.imdbID);
        this.storage.set('users_medias', this.medias);
        this.onChange.emit(Array.from(this.medias.values()));
    };
    FavoritesProvider.prototype.init = function () {
        return __awaiter(this, void 0, void 0, function () {
            var medias, err_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.storage.get('user_medias')];
                    case 1:
                        medias = _a.sent();
                        if (medias !== null && medias instanceof Map) {
                            this.medias = new Map(medias);
                            this.onChange.emit(Array.from(this.medias.values()));
                        }
                        else {
                            this.medias = new Map();
                        }
                        return [3 /*break*/, 3];
                    case 2:
                        err_1 = _a.sent();
                        console.log(err_1);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    FavoritesProvider.prototype.load = function () {
        this.onChange.emit(Array.from(this.medias.values()));
    };
    FavoritesProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_storage__["b" /* Storage */]])
    ], FavoritesProvider);
    return FavoritesProvider;
}());

//# sourceMappingURL=favorites.js.map

/***/ })

},[213]);
//# sourceMappingURL=main.js.map