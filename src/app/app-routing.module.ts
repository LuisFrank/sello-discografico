import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArtistsComponent } from './components/screens/artists/artists.component';
import { ArtistDetailComponent } from './components/screens/artists/artist-detail/artist-detail.component';
import { HomeComponent } from './components/screens/home/home.component';
import { ContactComponent } from './components/screens/contact/contact.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'artists', component: ArtistsComponent },
  { path: 'artistDetail', component: ArtistDetailComponent },
  { path: 'contact', component: ContactComponent },
  // { path: 'Component_Three', component: CompThreeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
