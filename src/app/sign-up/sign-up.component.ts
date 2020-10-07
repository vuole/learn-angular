import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  formSignUp: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.formSignUp = this.formBuilder.group({
      email: 'vuole.it@gmail.com',
      password: '',
      subjects: this.formBuilder.group({
        nodeJS: false,
        angular: true,
        reactJS: false
      })
    });
  }

  onSubmit(){
    console.log(this.formSignUp.value)
  }

}
