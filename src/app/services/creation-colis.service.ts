import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { createRequestOption } from './utils';
import {Colis} from '../models/Colis';



@Injectable({
  providedIn: 'root'
})
export class CreationColisService {

  constructor(private http: HttpClient) { }
  // tslint:disable-next-line:typedef
  public doCreation(colis){
    return this.http.post('http://localhost:9100/colis/create', colis, {responseType: 'text' as 'json'});
  }
  // tslint:disable-next-line:typedef


 // public getAll(req: any): Observable<any> {
    //const option = createRequestOption(req);
   // return this.http.get('http://localhost:9100/colis/all', {responseType: 'text' as 'json'});
 // }
  //tslint:disable-next-line:typedef
  getMyPackages(colis) {
    return this.http.get('http://localhost:9100/colis/all',colis);
  }
}
