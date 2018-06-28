import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeHeaderComponent } from './home-header/home-header.component';
import { HomeFooterComponent } from './home-footer/home-footer.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [HomeHeaderComponent, HomeFooterComponent]
})
export class HomeroutingModule { }
