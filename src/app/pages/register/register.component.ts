import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.state';
import { User } from 'src/app/models/user.model';
import * as UserAction from './../../store/actions/user.action';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  hide = true;

  registerForm = new FormGroup({
    firstname: new FormControl('', Validators.required),
    lastname: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required)
  })

  constructor(private router:Router, private store: Store<AppState>) { }

  ngOnInit(): void {
  }

  get firstname(){
    return this.registerForm.value.firstname;
  }
  get lastname(){
    return this.registerForm.value.lastname;
  }
  get email(){
    return this.registerForm.value.email;
  }
  get password(){
    return this.registerForm.value.password;
  }

  Submit(){
    let user: User = new User();
    user.firstname = this.registerForm.value.firstname;
    user.lastname = this.registerForm.value.lastname;
    user.email = this.registerForm.value.email;
    user.password = this.registerForm.value.password;
    this.store.dispatch(new UserAction.AddUser(user));
    this.router.navigate(["/login"]);
  }

}
