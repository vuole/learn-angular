import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  formSignUp: FormGroup;

  constructor() {
    this.formSignUp = new FormGroup({
      email: new FormControl(),
      password: new FormControl()
    });
   }

  ngOnInit() {
  }

  onSubmit(){
    console.log(this.formSignUp.value)
  }

}
