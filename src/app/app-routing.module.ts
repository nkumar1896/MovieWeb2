import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import{SearchComponent} from './search/search.component';
import{TrendingComponent} from './trending/trending.component';
import {UpcomingComponent } from './upcoming/upcoming.component';
import{CollectionComponent} from './collection/collection.component';

const routes: Route[] = [
  {path:'', redirectTo:'trending', pathMatch:'full'},
  
  {path:'search/:title', component:SearchComponent},
  {path:'trending', component:TrendingComponent},
  {path:'upcoming', component:UpcomingComponent},
  {path:'collection', component:CollectionComponent}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
