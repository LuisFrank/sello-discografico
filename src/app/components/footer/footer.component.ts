import { Component, OnInit } from '@angular/core';
import { faTwitter , faInstagram, faYoutube, faFacebook, faSpotify} from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  faTwitter = faTwitter;
  faInstagram = faInstagram;
  faYoutube = faYoutube;
  faFacebook = faFacebook;
  faSpotify = faSpotify;

  constructor() { }

  ngOnInit(): void {
  }

}
