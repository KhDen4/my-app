import { Component } from '@angular/core';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css']
})
export class UserCardComponent {
  num:string = "";
  date:string = "";
  cvv:string = "";

  BnClick()
    {
      console.log(Event);
    }
}
