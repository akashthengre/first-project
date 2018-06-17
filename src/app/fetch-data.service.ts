import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

@Injectable()
export class FetchDataService {
dataUrl = "assets/data.json";
remoteUrl = "https://jsonplaceholder.typicode.com/posts";
httpOptions = {
  headers: new HttpHeaders({
    "content-Type":"application/json"
  })
};
  constructor(private http:HttpClient) { }

  getData(){
    // return this.http.get(this.remoteUrl);
    return this.http.get(this.dataUrl);    
  }
  postData(item){
    return this.http.post(this.remoteUrl,item,this.httpOptions)
  }
}
