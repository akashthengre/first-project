import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  name:string='Akash';
  age:number=5;
  myArray=[1,2,3];
  myObj={
    "name":"xyz",
    "age":"1"
  }
  weekdays=["monday","tuesday","wednesday","thu","fri"];

  bulbs=[0,0,0,0,0];
  status1:boolean=true;
  x=['../assets/bulb-off.png','../assets/bulb-off.png','../assets/bulb-off.png','../assets/bulb-off.png','../assets/bulb-off.png'];
  y=['Off','Off','Off','Off','Off'];
  ind;
  switch(ind)
{
  if(this.status1==false){
 this.status1=true;
this.x[ind]='../assets/bulb-on.png';
this.y[ind]='OFF';
}
else  {
  this.status1=false;  
  this.x[ind]='../assets/bulb-off.png';
  this.y[ind]='On';
} 
}



  

}
