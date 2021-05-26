import { Component, OnInit } from '@angular/core';
import {CreationColisService} from '../../../services/creation-colis.service';
import {Colis} from '../../../models/Colis';

@Component({
  selector: 'app-colis',
  templateUrl: './colis.component.html',
  styleUrls: ['./colis.component.css']
})
export class ColisComponent implements OnInit {

  liste: any;


  constructor(private service: CreationColisService) {
  }

  ngOnInit(): void {


  }

  public getListe() {
    this.service.getMyPackages(this.liste.value).subscribe(res => {
      console.log(res);
      this.liste = res;

    });


    // tslint:disable-next-line:typedef
    //public getPackages(){
    // this.service.getMyPackages(this.package.value).subscribe(res => {
    // this.package = res;
    //console.log(this.package);
    //});
    //}
  }
}
