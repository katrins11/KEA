import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admit-piece',
  templateUrl: './admit-piece.component.html',
  styleUrls: ['./admit-piece.component.scss']
})
export class AdmitPieceComponent implements OnInit {
  admitPieceForm: FormGroup;
  formPieceImage = 'http://placehold.it/180';

  constructor(private fb: FormBuilder, private router: Router) { };

  admitPieceSubmit(admitPieceForm){
    // console.log("her");
    console.log("Form: " , admitPieceForm.controls);
    // if(admitPieceForm.valid){}
  }

  //Images
  pieceImg(event:any) {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();
  
      reader.onload = (event:any) => {
        this.formPieceImage = event.target.result;
      }
  
      reader.readAsDataURL(event.target.files[0]);
    }
  }

  ngOnInit() {
    // Admit Piece
    this.admitPieceForm = this.fb.group({
      pieceTitle: ['', Validators.required],
      pieceYear: ['', Validators.required],
      piceMedia: ['', Validators.required],
      pieceMaterial: ['', Validators.required],
      pieceDescription: ['', Validators.required],
      pieceSize: ['', Validators.required],
      pieceSellingPrice: ['', Validators.required],
      pieceRentingPrice: [''],
      pieceRentingPriceMonths: [''],
      pieceImage: ['']
    });
  }

}


// export class LogInComponent implements OnInit {

//   onSignUpSubmit(signUpForm) {
//     //console.log("is Valid?: " + signUpForm.valid);
//     console.log("Form: " , signUpForm.controls);

//     if (signUpForm.valid) {
//       // Send an http request to login
//       // Navigate to the home page (or some other page)
//       this.authService.login().subscribe(x => {
//         // Can you naviate to the path the user tried to go to instead of 
//         // always the contact?
//         this.router.navigate(['admin']);
//       });
      
//     } else {
//       // Display error messages.
//       console.log("SignUp: Something is missing!");
//     }
//   }

// }

