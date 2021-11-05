import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/screens/home/home.component';

const routes: Routes = [
  { path: 'HomeComponent', component: HomeComponent },
  // { path: 'Component_Two', component: CompTwoComponent },
  // { path: 'Component_Three', component: CompThreeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
