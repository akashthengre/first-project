import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-child-input',
  templateUrl: './child-input.component.html',
  styleUrls: ['./child-input.component.css']
})
export class ChildInputComponent implements OnInit {

  ngOnInit(): void {
    throw new Error("Method not implemented.");
  }
 @Input() nameofparent;
 @Input() secondnameofparent;

 getparentelement(){
  alert(this.nameofparent);
 }
 getparentelement1(){
  alert(this.secondnameofparent);
 }

}
