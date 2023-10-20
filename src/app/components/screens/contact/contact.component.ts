import { Component, OnInit } from '@angular/core';
import { faHome, faLocationPin, faPhoneFlip, faEnvelope } from '@fortawesome/free-solid-svg-icons';



@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  faEnvelope = faEnvelope;
  faLocation = faLocationPin;
  faPhone = faPhoneFlip;
  
  constructor() { }

  ngOnInit(): void {
  }

}
