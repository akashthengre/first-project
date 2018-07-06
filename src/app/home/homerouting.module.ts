import { NgModule } from '@angular/core';
import { HomeHeaderComponent } from './home-header/home-header.component';
import { HomeFooterComponent } from './home-footer/home-footer.component';
import {RouterModule,Routes} from '@angular/router';
import { HomeComponent } from './home.component';


const routes : Routes = [
  {path : 'home' , component : HomeComponent},
  {path:'home',
  children:[
    {path:'home-header',component:HomeHeaderComponent},
    {path:'home-footer',component:HomeFooterComponent}
  ]
}
];


@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  declarations: []
})
export class HomeroutingModule { }
