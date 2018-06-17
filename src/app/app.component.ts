import { Component } from "@angular/core";
import { FetchDataService } from "./fetch-data.service";
import {empty} from "rxjs";
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  data = {};
  show: boolean = false;
  item = {
    title:"student",
    body:"akash",
    userid:554
  };

  constructor(private dataservice: FetchDataService) {}

  showData() {
    this.dataservice.getData().subscribe(data => {
      this.data = data;
    });
  }

  setData(){
    this.dataservice.postData(this.item).subscribe(response => console.log(response));
    this.data={};
  }
}
