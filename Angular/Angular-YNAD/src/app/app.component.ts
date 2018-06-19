import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  newsletterForm: FormGroup;
  title = 'Young Nordic Artists and Designer';

  constructor(private fb: FormBuilder, private authService: AuthService) {
  }

  newsLetterSubmit(newsletterForm) {
    console.log("mail: ", newsletterForm.value);
  }

  ngOnInit() {
    // LogIn
    this.newsletterForm = this.fb.group({
      newsLetterMail: ['']
    });
  }
}
