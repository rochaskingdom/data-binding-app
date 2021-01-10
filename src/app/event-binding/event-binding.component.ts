import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent implements OnInit {

  i = 0;
  isBtnEnable = true;
  selectedOption = 1;
  buttonName = 'My Button';
  isSelectDisabled = false;
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

  cbChange(event): void {
    console.log(event.checked);
    this.isSelectDisabled = event.checked;
  }

  selectionChange(event): void {
    console.log(event);
    this.selectedOption = event.value;
  }

}
