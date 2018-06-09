import { Component, OnInit } from '@angular/core';

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
    
x ;
}
