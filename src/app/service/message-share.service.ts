import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessageShareService {
  
  private subMenu = new BehaviorSubject<string>('CompOne_ScreenOne');

  constructor() { }

  
  currentMenu = this.subMenu.asObservable();
  goToSubMenu(path: string) {
  this.subMenu.next(path);
  }
  
}
