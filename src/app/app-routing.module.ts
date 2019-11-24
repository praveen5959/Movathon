import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { WatchlistComponent } from './watchlist/watchlist.component';
import { AppComponent } from './app.component';
import { MainComponentComponent } from './main-component/main-component.component';


const routes: Routes = [
  {path: "",component:MainComponentComponent},
  { path: 'main',pathMatch:'full', component: UserProfileComponent },
  { path: 'watchList', pathMatch:'full',component: WatchlistComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
