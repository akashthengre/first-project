import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
parentelement='i am parant element';
parentelement1='i am parant element 1';
parentmethod(){
  alert('I am parent function');
}


}
