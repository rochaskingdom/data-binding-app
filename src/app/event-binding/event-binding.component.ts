import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent implements OnInit {

  i = 0;
  isBtnEnable = true;
  buttonName = 'My Button';
  spinnerMode = 'determinate';

  constructor() {
  }

  ngOnInit(): void {
  }

  save(): void {
    console.log('Click');
  }

  inc(): void {
    this.i++;
    this.buttonName = 'It was clicked ' + this.i + ' times';
  }

  disable(): void {
    this.isBtnEnable = false;
    this.spinnerMode = 'indeterminate';
    setTimeout(() => {
      this.isBtnEnable = true;
      this.spinnerMode = 'determinate';
    }, 3000);
  }

}
