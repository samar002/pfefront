import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http: HttpClient) { }


  // tslint:disable-next-line:typedef
  public doRegistration(client){
    return this.http.post('http://localhost:9100/clients/create', client, {responseType: 'text' as 'json'});
  }
}
