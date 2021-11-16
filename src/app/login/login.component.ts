import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FilmService } from "../film.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  uname;
  pass;
  isFormValid = false;
  areCredentialsInvalid = false;
  constructor(private film: FilmService) { }

  ngOnInit(): void {
  }

  login(sign: any, signInForm: NgForm) {
    if (!signInForm.valid) {
      this.isFormValid = true;
      this.areCredentialsInvalid = false;
      return;
    }
    this.checkCredentials(sign);

  }
  checkCredentials(sign: any) {
    const signin = new SignIn(sign.name, sign.pass)
    if (!this.film.authenticate(signin)) {
      this.isFormValid = false;
      this.areCredentialsInvalid = true;
    }
  }

}

export class SignIn {
  private uname: string;
  private pass: string;
  constructor(name: string, pass: string) {
    this.uname = name;
    this.pass = pass;
  }

  getPass(): string {
    return this.pass;
  }
  getUname(): string {
    return this.uname;
  }

}
