import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PLANT } from 'src/app/dataMok';
import { Icard } from 'src/app/interface';
import { DataServiceService } from 'src/app/service/data-service.service';

@Component({
  selector: 'app-plant-list',
  templateUrl: './plant-list.component.html',
  styleUrls: ['./plant-list.component.scss'],
})
export class PlantListComponent implements OnInit {
  plantList!: Icard[]
 /*  @Input() trowBack!: boolean; */
 /*  @Output() backToParent = new EventEmitter(); */
  selectedPlant!: Icard;
  open:boolean = false;

  constructor(public plantService: DataServiceService) {}

  ngOnInit(): void {
    this.plantList = this.plantService.getAll();
  }

  dettaglio(plant: Icard) {
    this.selectedPlant = this.plantService.get(plant.id);
    this.open = true
  }

/*   back() {
    this.backToParent.emit();
  } */

  close() {
    this.open = false;
  }
}
