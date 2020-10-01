import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-two-way-binding',
  templateUrl: './two-way-binding.component.html',
  styleUrls: ['./two-way-binding.component.css']
})
export class TwoWayBindingComponent implements OnInit {

  name : string = '';

  isHighlight : boolean = true;

  evenStyle:object = {color:'red', fontSize:'40px'};
  oddStyle:object = {color:'black', fontSize:'20px'};

  currentClass:object = {circle:!this.isHighlight , square:this.isHighlight};

  constructor() { }

  ngOnInit() {
  }

  // showEvent(x){
  //   this.name = x.target.value;
  // }

}
