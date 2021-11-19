import { Component, Input, OnInit } from '@angular/core';
import { PLANT } from 'src/app/dataMok';
import { Icard } from 'src/app/interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  title = 'Succulent 90100';
  plants: Icard[] = PLANT
  display: boolean = true;
  constructor() {}

  ngOnInit(): void {}

  show() {
    this.display = false;
  }
  cameFromChild() {
    this.display = true;
  }
}
