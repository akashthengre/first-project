import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HomeFooterComponent } from './home/home-footer/home-footer.component';
import { HomeHeaderComponent } from './home/home-header/home-header.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { AboutusHeaderComponent } from './aboutus/aboutus-header/aboutus-header.component';
import { AboutusFooterComponent } from './aboutus/aboutus-footer/aboutus-footer.component';
import { ContactComponent } from './contact/contact.component';
import { ContactHeaderComponent } from './contact/contact-header/contact-header.component';
import { ContactFooterComponent } from './contact/contact-footer/contact-footer.component';
import { RoutingModule } from './routing.module';
import { HomeModule } from './home/home.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeFooterComponent,
    HomeHeaderComponent,
    HomeComponent,
    AboutusComponent,
    AboutusHeaderComponent,
    AboutusFooterComponent,
    ContactComponent,
    ContactHeaderComponent,
    ContactFooterComponent,
    RoutingModule,
    HomeModule
  ],
  imports: [
    BrowserModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
