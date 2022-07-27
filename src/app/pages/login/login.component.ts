import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.state';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
  });

  hide = true;

  users: User[] = [];

  constructor(private route: Router, private store: Store<AppState>) {}

  ngOnInit(): void {
    this.store.select('userList').subscribe((data: any) => {
      this.users = data.users;
    });
  }

  get email() {
    return this.loginForm.get('email');
  }
  get password() {
    return this.loginForm.get('password');
  }

  submit() {
    if (
      this.loginForm.value.email == '' ||
      this.loginForm.value.password == ''
    ) {
    }
    let em = this.loginForm.value.email;
    let ps = this.loginForm.value.password;
    let p = 0;
    this.users.forEach((element) => {
      if (element.email == em && element.password == ps) {
        localStorage.setItem('isLoggedIn', "true");
        localStorage.setItem('Name', element.firstname+" "+element.lastname)
        this.route.navigate(['/']);
        p = 1;
      }
    });
    if (!p) {
      alert('Wrong email or password!');
      this.loginForm.reset();
    }
  }
}
