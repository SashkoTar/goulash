import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'onpush-detection',
  template: '<div>Bye Bye Mr {{person.firstName}} {{person.lastName}}</div>',
  styleUrls: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OnpushDetectionComponent {
  @Input() public person;

  constructor() { }


}
