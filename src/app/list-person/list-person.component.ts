import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-person',
  templateUrl: './list-person.component.html',
  styleUrls: ['./list-person.component.css']
})
export class ListPersonComponent implements OnInit {

  arrPeople = [
    {id: 1, name: 'Vu', age: 23 },
    {id: 2, name: 'Phuong', age: 23 },
    {id: 3, name: 'Huy', age: 20 },
  ];

  constructor() { }

  ngOnInit() {
  }

  deletePerson(id_Person){
    let index = this.arrPeople.findIndex(e => e.id === id_Person);
    this.arrPeople.splice(index,1);
  }

}
