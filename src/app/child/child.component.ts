import { Component, OnInit } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  counter=0;

  constructor() {
    // setInterval(function(){this.counter++},1000)
    
   }

  ngOnInit() {
  }

    y=setInterval(()=>{this.counter++},1000)

    displayCount(){
      this.parentcount.emit(this.counter);
    }

    @Output() parentcount = new EventEmitter();

  
    
    
x ;
}
