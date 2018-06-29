import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeHeaderComponent } from './home-header/home-header.component';
import { HomeFooterComponent } from './home-footer/home-footer.component';
import { HomeroutingModule } from './homerouting.module';

@NgModule({
  imports: [
    CommonModule,HomeroutingModule
  ],
  declarations: [HomeHeaderComponent,HomeFooterComponent]
})
export class HomeModule { }
