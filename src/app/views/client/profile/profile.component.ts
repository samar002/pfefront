import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Client} from '../../../models/Client';
import {ProfileService} from '../../../services/profile.service';

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
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  public profileForm: FormGroup;
 // client: Client = new Client('', '', '', new Date(), '', '', '', Number(''), Number(''), '');
  message: any;
  photo: any;
  photoProfil: any;
  nom : any;
  prenom : any;
  email : any;
  constructor(private fb: FormBuilder, private service: ProfileService) {
    this.profileForm = this.fb.group({
      id: [''],
      fName: ['', [Validators.required, Validators.maxLength(20)]],
      lName: ['', [Validators.required]],
      email: ['', [Validators.required]],
        mdp: ['', [Validators.required]],
        ddn: ['', [Validators.required]],
        cmdp: ['', [Validators.required]],
      adr: ['', [Validators.required]],
      cp: ['', [Validators.required]],
      nbr: ['', [Validators.required]],
      photo: [this.photo, [Validators.required]],
      sendCatalog: [{value: true}]
    });
  }

  ngOnInit(): void {


    this.findbyemail(localStorage.getItem('email'));
  }

  recuperPhoto(fileInput: any): void {
    this.photo = fileInput.target.files[0];
    const fileReader = new FileReader();
    fileReader.readAsDataURL(this.photo);
    fileReader.onload = (e: any) => {
      console.log('fileReader.result');
      console.log(fileReader.result);
      this.photo = fileReader.result;
      this.profileForm.get('photo')?.setValue(this.photo);
    };
  }

// tslint:disable-next-line:typedef
  public saveData() {
    console.log(this.profileForm);
    console.log('valeurs:', JSON.stringify(this.profileForm.value));
  }

// tslint:disable-next-line:typedef
  public UpdateNow() {
    this.service.doUpdate(this.profileForm.value, this.profileForm.get('id')?.value).subscribe(res => {
      console.log(res);
    });
  }

  findbyemail(email: any) {
    this.service.findbyemail(email).subscribe(res => {
      console.log(res);
      // @ts-ignore
      this.profileForm.get('id').setValue(res.id);
      // @ts-ignore
      this.profileForm.get('adr').setValue(res.adr);
      // @ts-ignore
      this.profileForm.get('mdp').setValue(res.mdp);

      // @ts-ignore
      this.profileForm.get('cmdp').setValue(res.cmdp);
      // @ts-ignore
      this.profileForm.get('fName').setValue(res.fName);
      // @ts-ignore
      this.profileForm.get('lName').setValue(res.lName);
      // @ts-ignore
      this.nom = res.fName;
      // @ts-ignore
      this.prenom = res.lName;
      // @ts-ignore
      this.email = res.email;

      // @ts-ignore
      this.profileForm.get('nbr').setValue(res.nbr);
      // @ts-ignore
      this.profileForm.get('ddn').setValue(res.ddn);
      // @ts-ignore
      this.profileForm.get('email').setValue(res.email);
      // @ts-ignore
      this.profileForm.get('cp').setValue(res.cp);
      // @ts-ignore
     this.photoProfil = res.photo;
      // @ts-ignore<

    });
  }
}
