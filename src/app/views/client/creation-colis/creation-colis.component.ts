import { Component, OnInit } from '@angular/core';

import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Colis} from '../../../models/Colis';
import {CreationColisService} from '../../../services/creation-colis.service';
// @ts-ignore

@Component({
  selector: 'app-creation-colis',
  templateUrl: './creation-colis.component.html',
  styleUrls: ['./creation-colis.component.css']
})
export class CreationColisComponent implements OnInit {
  public creationForm: FormGroup;
  colis
  message: any;
  photo:any;

  constructor(private fb: FormBuilder, private service: CreationColisService) { }
  ngOnInit(): void {
    this.creationForm = this.fb.group({
      poids: ['', [Validators.required]],
      longueur: ['', [Validators.required]],
      largeur: ['', [Validators.required]],
      haut: ['', [Validators.required]],
      prix: ['', [Validators.required]],
      adr: ['', [Validators.required]],
      adr1: ['', [Validators.required]],
      type: ['', [Validators.required]],
      contenu: ['', [Validators.required]],
      photo: [this.photo, [Validators.required]]
    });
  }
  recuperPhoto(fileInput: any): void {
    this.photo = fileInput.target.files[0];
    const fileReader = new FileReader();
    fileReader.readAsDataURL(this.photo);
    fileReader.onload = (e: any) => {
      console.log('fileReader.result');
      console.log(fileReader.result);
      this.photo = fileReader.result;
      this.creationForm.get('photo')?.setValue(this.photo);
    };
  }

  // tslint:disable-next-line:typedef
  public saveData() {
    console.log(this.creationForm);
    console.log('valeurs:', JSON.stringify(this.creationForm.value));
  }
  // tslint:disable-next-line:typedef
  public creationNow() {
    this.service.doCreation(this.creationForm.value).subscribe(res => {
      console.log(res);
    });
  }


}
