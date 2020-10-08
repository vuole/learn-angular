import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

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
      email: ['', [Validators.required, gmailValidator]],
      password: '',
      subjects: this.formBuilder.group({
        nodeJS: false,
        angular: true,
        reactJS: false
      })
    });
  }
  //Cách cũ sử dụng FormControl. không sử dụng FormBuilder
  // this.formSignUp = new FormGroup({
  //   email: new FormControl('vuole.it@gmail.com'),
  //   password: new FormControl(),
  //   subjects: new FormGroup({
  //     nodeJS: new FormControl(false),
  //     angular: new FormControl(true),
  //     reactJS: new FormControl(false)
  //   })
  // });

  onSubmit(){
    console.log(this.formSignUp.value)
  }
}

  //Validator Custom
  function gmailValidator(formControl: FormControl) {
    if(formControl.value.includes('@gmail.com')){
      return null;
    }
    return {gmail: true};
  }
