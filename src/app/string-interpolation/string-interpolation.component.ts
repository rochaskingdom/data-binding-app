import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-string-interpolation',
  templateUrl: './string-interpolation.component.html',
  styleUrls: ['./string-interpolation.component.css']
})
export class StringInterpolationComponent implements OnInit {

  person = {
    firstName: 'Jhon',
    lastName: 'Bro',
    age: 50,
    address: 'Portland'
  };

  constructor() {
  }

  ngOnInit(): void {
  }

}
