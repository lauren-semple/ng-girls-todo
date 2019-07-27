import { Component, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-input-button-unit',
  template: `


  <input class="todo-input"
          #inputElementRef
          [value]="title"
         (keyup.enter)="submitValue(inputElementRef.value)">

  <button class="btn"
          (click)="submitValue(inputElementRef.value)">
  Add New Item 💕🍥
  </button>
  `,
  styleUrls: ['./input-button-unit.component.css']
})
export class InputButtonUnitComponent implements OnInit {
  @Output() submit: EventEmitter<string> = new EventEmitter();

  title = 'Hello World';

  constructor() { }

  ngOnInit() {
  }

  submitValue(newTitle: string) {
    this.submit.emit(newTitle);
  }
}
