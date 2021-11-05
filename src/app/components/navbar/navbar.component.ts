import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessageShareService } from 'src/app/service/message-share.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  service: any;
  items: any;
  
  constructor(private router: Router,private serviceI :MessageShareService) {
      this.service = serviceI;
   }

  ngOnInit(): void {
    this.items = [
      {
        label: 'Component One',
        icon: 'pi pi-pw pi-file',
        items: [
        { label: 'Screen One', icon: 'pi pi-fw', command: (event: any) => {
          this.goToComp1_Scr1(); } },
        { label: 'Screen Two', icon: 'pi pi-fw', command: (event: any) => {
        this.goToComp1_Scr2() } },
        ]
      },
      // {
      //   label: 'Component Two',
      //       icon: 'pi pi-pw pi-file',
      //       items: [
      //       { label: 'Screen Two', icon: 'pi pi-fw', command: (event: any) => {
      //           this.goToComp2_Scr1(); } },
      //       { label: 'Screen Two', icon: 'pi pi-fw', command: (event: any) => {
      //       this.goToComp2_Scr2() } },
      //       ]
      // }  
    ]
  }


  goToComp1_Scr1() {
    this.router.navigateByUrl('Component_One');
    this.service.goToSubMenu('CompOne_ScreenOne');
    }
  goToComp1_Scr2() {
    this.router.navigateByUrl('Component_One');
    this.service.goToSubMenu('CompOne_ScreenTwo');
    }


    
}
