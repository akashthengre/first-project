import { NgModule } from '@angular/core';
import { RouterModule, Routes  } from '@angular/router';//step1
import { C1Component } from '../c1/c1.component';
import { C3Component } from '../c3/c3.component';
import { C2Component } from '../c2/c2.component';
import { DefaultComponent } from '../default/default.component';
import { PagenotfoundComponent } from '../pagenotfound/pagenotfound.component';
import { EmptyContactService } from '../empty-contact.service';

//step2
const routes : Routes = [
  {path:'',component:DefaultComponent},
  {path:'c2',component:C2Component},
  {path:'c3',component:C3Component},
 
  {path:'c1',
  component:C1Component,
  canDeactivate:[EmptyContactService]
  },
  {path:'**',component:PagenotfoundComponent} 
];

@NgModule({
  imports: [
  RouterModule.forRoot(routes)  //step3
  ],
  exports:[RouterModule],
  declarations: []
})
export class AppRoutingModule { }
