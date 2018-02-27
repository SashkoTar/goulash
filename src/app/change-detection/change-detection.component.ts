import { Component} from '@angular/core';


@Component({
  selector: 'app-change-detection',
  templateUrl: './change-detection.component.html',
  styleUrls: ['./change-detection.component.css']
})
export class ChangeDetectionComponent {
  private firstName;
  private lastName;
  private person;

  constructor() {
      this.person = {
        firstName: "Kurt",
        lastName: "Cobain"
      }
   }

   public update() {
     this.person.firstName = this.firstName;
     this.person.lastName = this.lastName;
   }

   public updateOnPush() {
     this.person = {
        firstName: this.firstName,
        lastName: this.lastName
   }

}
