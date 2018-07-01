import { Injectable } from '@angular/core';
import { CanDeactivate  } from '@angular/router';
import { C1Component } from './c1/c1.component';


@Injectable()

export class EmptyContactGuard implements CanDeactivate<C1Component>{

  constructor(){}

  canDeactivate(component:C1Component){
    alert('inside can deactivate');

    if(component.contactNumber.length>0)
    {
      alert('true case');

      return true;
    }
    else
    {
      alert('false case');

      alert('add contact number');
      return false;
    }

  }



}


