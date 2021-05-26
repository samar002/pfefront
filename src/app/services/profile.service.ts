import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private http: HttpClient) {
  }


  public doUpdate(client, id) {
    return this.http.put('http://localhost:9100/clients/modif/'+ id, client);
  }

  public findbyemail(email: any) {
    return this.http.get('http://localhost:9100/clients/find/'+ email);

  }
}
