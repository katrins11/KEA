import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})

export class LogInComponent implements OnInit {
  // loginForm: FormGroup;
  constructor(private router: Router) {
  };

  ngOnInit() {
    // this.loginForm = this.fb.group({
    //   email: ['', ],
    //   password: ['', ]
    // });
  }

  onSubmit(e){
    e.preventDefault();
    var email = e.target.elements[0].value;
    var password = e.target.elements[1].value;
    console.log(email, password);

    if(email == "katrin" && password == "admin"){
      this.router.navigate(['admin']);    }
  }

}
