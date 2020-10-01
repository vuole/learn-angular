import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {

  @Input() name: String;
  @Input() age: Number;

  @Output() delete = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  deleteClick(){
    this.delete.emit();
  }

}
