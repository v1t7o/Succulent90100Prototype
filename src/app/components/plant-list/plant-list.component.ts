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
  @Output() eventSelect = new EventEmitter<Icard>();
  @Input() trowBack!: boolean;
  @Output() backToParent = new EventEmitter();
  selectedPlant!: Icard;


  constructor(private plantService: DataServiceService) {}

  ngOnInit(): void {
    this.plantList = this.plantService.getAll();
  }

  dettaglio(plant: Icard) {
    this.selectedPlant = this.plantService.get(plant.id);
    this.eventSelect.emit(plant);
    console.log(plant)
  }

  back() {
    this.backToParent.emit();
  }
}
