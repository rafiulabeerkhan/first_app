import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { User } from '../model/User';

@Injectable({
  providedIn: 'root'
})
export class AuthService  {

  

  constructor(private http: HttpClient) {
   }
  apiurl = "http://localhost:3000/students";


  

  GetAll() {
    return this.http.get(this.apiurl);
  }
  GetByCode(code: any) {
    return this.http.get(this.apiurl + '/' + code);
  }
  ProceedRegister(inputdata: any) {
    return this.http.post(this.apiurl, inputdata);
  }
  Updateuser(code: any, inputdata: any) {
    return this.http.get(this.apiurl + '/' + code, inputdata);
  }


}
