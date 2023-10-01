import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.scss']
})
export class ArtistComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  redireccionar() {
    this.router.navigate(['/artistDetail']); // Redirecciona a la ruta '/segundo'
  }

}
