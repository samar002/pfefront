import {Component, OnInit} from '@angular/core';
import {FormGroup, FormControl, FormBuilder, Validators, AbstractControl} from '@angular/forms';

import {RegisterService} from '../../services/register.service';
import {Client} from '../../models/Client';

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
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  public registerForm: FormGroup;


  constructor() {
  }

  ngOnInit(): void {

  }

}
