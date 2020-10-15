import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from  '@angular/forms';
import { Router } from  '@angular/router';
import { AuthService } from  '../core/service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router, private formBuilder: FormBuilder) { }

  loginForm: FormGroup;
  isSubmitted  =  false;

  ngOnInit(): void {
  	this.loginForm  =  this.formBuilder.group({
        auuid: ['', Validators.required],
        password: ['', Validators.required]
    });
  }

  get formControls() { return this.loginForm.controls; }


  login() {
    this.isSubmitted = true;
    if(this.loginForm.invalid){
      return;
    }
    if(this.authService.login(this.loginForm.value)) {
      if(this.authService.accessStatus()) {
        this.router.navigateByUrl('/forex');
      }
      else {
        this.router.navigateByUrl('/account');
      }
    }
    else {
      this.router.navigateByUrl('/login');
    }
  }

}
