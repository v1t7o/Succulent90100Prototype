import { Component } from '@angular/core';
import { PLANT } from './dataMok';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  PLANT = PLANT;

  title = 'SucculentWeb';
}
