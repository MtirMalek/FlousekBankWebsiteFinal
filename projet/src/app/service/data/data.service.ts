import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient) { }
  getalltrans(){
    return     this.http.get('http://localhost:3000/api/transaction/');

  }
  posttrans(fu:any){
    return this.http.post('http://localhost:3000/api/create/Createtransac',fu);
  }
  
}
