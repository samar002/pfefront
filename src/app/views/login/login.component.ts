import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Client} from '../../models/Client';
import {LoginService} from '../../services/login.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public loginForm: FormGroup;
  email: any;
 // client: Client = new Client('', '', '', Date, '', '', '', '', '', '','');
  message: any;

  // id: any;
  constructor(private fb: FormBuilder, private service: LoginService, private router: Router) {
  }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      mdp: ['', [Validators.required,]]
    });
  }

  // tslint:disable-next-line:typedef
  public loginNow() {
    this.service.loginClient(this.loginForm.value).subscribe(res => {
      localStorage.setItem('email',this.loginForm.get('email')?.value);
      this.router.navigate(['homeclient']);
      console.log('etat')
      console.log(res)
    });
  }

}


