import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeHeaderComponent } from './home-header/home-header.component';
import { HomeFooterComponent } from './home-footer/home-footer.component';
import {RouterModule,Routes} from '@angular/router';


const routes : Routes = [
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
  declarations: [HomeHeaderComponent, HomeFooterComponent]
})
export class HomeroutingModule { }
