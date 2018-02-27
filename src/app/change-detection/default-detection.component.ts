import { Component, Input } from '@angular/core';

@Component({
  selector: 'default-detection',
  template: '<div>Hello Mr {{person.firstName}} {{person.lastName}}</div>',
  styleUrls: []
})
export class DefaultDetectionComponent {
  @Input() public person;

  constructor() { }


}
