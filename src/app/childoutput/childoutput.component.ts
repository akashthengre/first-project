import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-childoutput',
  templateUrl: './childoutput.component.html',
  styleUrls: ['./childoutput.component.css']
})
export class ChildoutputComponent  {

  @Output() changechild = new EventEmitter();

  run(){
    this.changechild.emit('');
  }
  

}
