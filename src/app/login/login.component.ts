import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;


  constructor(private auth: AuthService, private router: Router) {

  }

  ngOnInit() {

    this.loginForm = new FormGroup({

      email: new FormControl(),
      password: new FormControl()
    });

  }

  loginUser() {
    this.auth.loginUser(this.loginForm.value).subscribe(res => {

      this.auth.saveToken(res.success);
      this.router.navigateByUrl('/qcm');
    })
  }


}
