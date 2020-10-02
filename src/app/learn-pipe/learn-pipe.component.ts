import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-learn-pipe',
  templateUrl: './learn-pipe.component.html',
  styleUrls: ['./learn-pipe.component.css']
})
export class LearnPipeComponent implements OnInit {

  birthday = new Date(1997,10,21);
  person = {name: "Vu Ole", age: 23};
  address = Promise.resolve('5G Ao Sen');
  constructor() { }

  ngOnInit() {
  }

}
