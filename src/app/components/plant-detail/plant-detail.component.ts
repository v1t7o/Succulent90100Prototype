import { Component, Input, OnInit } from '@angular/core';
import { PLANT } from 'src/app/dataMok';
import { Icard } from 'src/app/interface';
import { DataServiceService } from 'src/app/service/data-service.service';


@Component({
  selector: 'app-plant-detail',
  templateUrl: './plant-detail.component.html',
  styleUrls: ['./plant-detail.component.scss'],
})
export class PlantDetailComponent implements OnInit {
@Input() selectedPlant!: Icard;

  constructor() {

  }

  ngOnInit(): void {
  }


}
