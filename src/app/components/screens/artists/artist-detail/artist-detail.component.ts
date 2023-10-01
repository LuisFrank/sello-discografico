import { Component, OnInit } from '@angular/core';
import { faFacebook, faInstagram, faSpotify, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-artist-detail',
  templateUrl: './artist-detail.component.html',
  styleUrls: ['./artist-detail.component.scss']
})
export class ArtistDetailComponent implements OnInit {

  faTwitter = faTwitter;
  faInstagram = faInstagram;
  faYoutube = faYoutube;
  faFacebook = faFacebook;
  faSpotify = faSpotify;
  
  constructor() { }

  ngOnInit(): void {
  }

}
