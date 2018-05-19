import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  myvalue1:number;
  myvalue2:number;
  istrue:boolean = false;
  result;
  
  
add(){
this.result=(+this.myvalue1) + (+this.myvalue2);

  }

  checkresult(){    
if(this.result != undefined)
  return true;

else
return false;
  }


}
