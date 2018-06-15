import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { DefaultComponent } from './default/default.component';
import { ApproutingComponent } from './approuting/approuting.component';
import { ApproutingModule } from './approuting/approuting.module';
import { ContactcontentComponent } from './contact/contactcontent/contactcontent.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    HeaderComponent,
    FooterComponent,
    DefaultComponent,
    ApproutingComponent,
    ContactcontentComponent
  ],
  imports: [
    BrowserModule,FormsModule,ApproutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
