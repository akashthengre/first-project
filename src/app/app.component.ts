import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  myvalue1;
  myvalue2;
  // istrue:boolean = false;
  result;
  
  istrue(){
    if(this.myvalue1==null || this.myvalue2==null)
    return true
    else
    return false
  }

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
