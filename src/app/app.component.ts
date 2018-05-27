import { Component } from '@angular/core';
import {LibraryService} from './library.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  // [ngStyle] creating object
  getconfigstyle={
    'color':'brown',
    'text-decoration':'underline',
    'font-weight':'bold'
    };

    // [ngClass] creating object
getclassfunc={'myline4':true,'myline4a':true};

// [ngClass] & [ngStyle] using variable
  getconfig={'color':'brown','text-decoration':'underline'}
  getclass={'myline4':true,'myline4a':true}

  // [ngStyle]="getconfig1()"
  getconfig1(){    
    return this.getconfigstyle;
  }

  // [ngClass]="getclass1()"
  getclass1(){
return this.getclassfunc;

  }

  constructor (private lib:LibraryService) {   

  }
  printbooks=this.lib.books;

  pushadd="";
  addpus(){
this.lib.books.push(this.pushadd);
  }
  result;
  




  }

