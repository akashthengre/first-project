import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { Feature3Module } from './feature3/feature3.module';
import { Feature1Module } from './feature1/feature1.module';
import { Feature2Module } from './feature2/feature2.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,FormsModule,Feature1Module,Feature2Module,Feature3Module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
