import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { UpcomingComponent } from './upcoming/upcoming.component';
import { TrendingComponent } from './trending/trending.component';
import {HttpClientModule} from '@angular/common/http';
import { TestService } from './test.service';
import {FormsModule} from '@angular/forms';
import { CollectionComponent } from './collection/collection.component';
import { WatchlaterComponent } from './watchlater/watchlater.component';
import { BadmoviesComponent } from './badmovies/badmovies.component';
@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    UpcomingComponent,
    TrendingComponent,
    CollectionComponent,
    WatchlaterComponent,
    BadmoviesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [TestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
