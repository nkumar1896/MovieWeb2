import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import{SearchComponent} from './search/search.component';
import{TrendingComponent} from './trending/trending.component';
import {UpcomingComponent } from './upcoming/upcoming.component';
import{CollectionComponent} from './collection/collection.component';
import { WatchlaterComponent } from './watchlater/watchlater.component';
import { BadmoviesComponent } from './badmovies/badmovies.component';
import { MoreinfoComponent } from './moreinfo/moreinfo.component';

const routes: Route[] = [
  {path:'', redirectTo:'trending', pathMatch:'full'},
  
  {path:'search/:title', component:SearchComponent},
  {path:'trending', component:TrendingComponent},
  {path:'upcoming', component:UpcomingComponent},
  {path:'collection', component:CollectionComponent},
  {path:'watchlater', component:WatchlaterComponent},
  {path:'badmovies', component:BadmoviesComponent},
  {path:'moreinfo', component:MoreinfoComponent}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
