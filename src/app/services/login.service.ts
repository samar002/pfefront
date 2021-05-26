import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }


  // tslint:disable-next-line:typedef
  public loginClient(client){
    return this.http.post('http://localhost:9100/clients/login', client, {responseType: 'text' as 'json'});
  }
}
