import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { PasswordValidator } from '../PasswordValidator';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})

export class LogInComponent implements OnInit {
  loginForm: FormGroup;
  signUpForm: FormGroup;
  formImage = 'http://placehold.it/180';

  constructor(private fb: FormBuilder, private router: Router, private authService: AuthService) {
  };

  onLogInSubmit(loginForm) {
    console.log("is Valid?: " + loginForm.valid);

    if (loginForm.valid) {
      // Send an http request to login
      // Navigate to the home page (or some other page)
      this.authService.login().subscribe(x => {
        // Can you naviate to the path the user tried to go to instead of 
        // always the contact?
        this.router.navigate(['admin']);
      });
      
    } else {
      // Display error messages.
      console.log("LogIn: Something is missing!");
    }
  }

  onSignUpSubmit(signUpForm) {
    //console.log("is Valid?: " + signUpForm.valid);
    console.log("Form: " , signUpForm.controls);

    if (signUpForm.valid) {
      // Send an http request to login
      // Navigate to the home page (or some other page)
      this.authService.login().subscribe(x => {
        // Can you naviate to the path the user tried to go to instead of 
        // always the contact?
        this.router.navigate(['admin']);
      });
      
    } else {
      // Display error messages.
      console.log("SignUp: Something is missing!");
    }
  }

  //Images
  signUpImg(event:any) {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();
  
      reader.onload = (event:any) => {
        this.formImage = event.target.result;
      }
  
      reader.readAsDataURL(event.target.files[0]);
    }
  }


  ngOnInit() {
    // LogIn
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', 
        Validators.compose([
          Validators.required,
          PasswordValidator.getPasswordValidator()
        ])
      ]
    });
    // SignUp
    this.signUpForm = this.fb.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      signUpUsername: ['', Validators.required],
      location: ['', Validators.required],
      email: ['', Validators.required],
      profession: ['', Validators.required],
      signUpPassword: ['', Validators.required],
      about: ['', Validators.required],
      signUpImage: ['']
    });
  }

}
