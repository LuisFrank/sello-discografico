import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { LayoutComponent } from './components/layout/layout.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/screens/home/home.component';
import { ArtistsComponent } from './components/screens/artists/artists.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ArtistComponent } from './components/screens/artists/artist/artist.component';
import { ArtistDetailComponent } from './components/screens/artists/artist-detail/artist-detail.component';
// import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LayoutComponent,
    NavbarComponent,
    HomeComponent,
    ArtistsComponent,
    ArtistComponent,
    ArtistDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    // FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
