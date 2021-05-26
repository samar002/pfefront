import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Client} from '../../../models/Client';
import {RegisterService} from '../../../services/register.service';

function passwordMatcher(c: AbstractControl): { [key: string]: boolean } | null {

  const mdpControl = c.get('mdp');
  const cmdpControl = c.get('cmdp');

  if (mdpControl.pristine || cmdpControl.pristine) {
    return null;
  }

  if (mdpControl.value === cmdpControl.value) {
    return null;
  }
  return {match: true};
}

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {

  public clientForm: FormGroup;
  photo: any;
 // client: Client = new Client('', '', '', new Date(), '', '', '', Number(''), Number(''), '');
  message: any;
  submitted = false;

  constructor(private fb: FormBuilder, private service: RegisterService) {
  }

  ngOnInit(): void {
    this.clientForm = this.fb.group({
      fName: ['', [Validators.required, Validators.maxLength(20)]],
      lName: ['', [Validators.required]],
      ddn: ['', [Validators.required]],

      email: ['', [Validators.required]],
      // mdpGroup: this.fb.group({
      mdp: ['', [Validators.required]],
      cmdp: ['', [Validators.required]],
      // }, {validators: passwordMatcher}),
      adr: ['', [Validators.required]],
      cp: ['', [Validators.required]],
      nbr: ['', [Validators.required]],
      photo: [this.photo, [Validators.required]],
      sendCatalog: [{value: true}]}
    );
  }

  // tslint:disable-next-line:typedef
  public saveData() {
    console.log(this.clientForm);
    console.log('valeurs:', JSON.stringify(this.clientForm.value));
  }

  public fillFormData(): void {
    this.clientForm.patchValue(
      {
        fName: 'samar',
        lName: 'belgaied',
        sendCatalog: true
      }
    );
  }
  //jdidaaaa
   MustMatch(controlName: string, matchingControlName: string) {
    return (formGroup: FormGroup) => {
      const control = formGroup.controls[controlName];
      const matchingControl = formGroup.controls[matchingControlName];

      if (matchingControl.errors && !matchingControl.errors.mustMatch) {
        // return if another validator has already found an error on the matchingControl
        return;
      }

      // set error on matchingControl if validation fails
      if (control.value !== matchingControl.value) {
        matchingControl.setErrors({mustMatch: true});
      } else {
        matchingControl.setErrors(null);
      }

    }
  }
  // tslint:disable-next-line:typedef
  public registerNow() {
    this.service.doRegistration(this.clientForm.value).subscribe(res => {
      localStorage.setItem('email',this.clientForm.get('email')?.value);
      console.log(res);

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
      this.clientForm.get('photo')?.setValue(this.photo);
    };
  }
  get f() { return this.clientForm.controls; }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.clientForm.invalid) {
      return;
    }

    // display form values on success
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.clientForm.value, null, 4));
  }

  onReset() {
    this.submitted = false;
    this.clientForm.reset();
  }
}
