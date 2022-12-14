import { Component, OnInit } from '@angular/core';
import { Building } from 'src/app/models/building.model';
import { BuildingsService } from 'src/app/services/buildings.service';

@Component({
  selector: 'app-building-list',
  templateUrl: './building-list.component.html',
  styleUrls: ['./building-list.component.css']
})
export class BuildingListComponent implements OnInit {
  buildings: Building[] = [];
constructor(private buildingService: BuildingsService){}

  ngOnInit(): void {

    this.buildingService.getAllBuildings()
    .subscribe({
      next:(buildings)=>{
        this.buildings = buildings;
      },
      error:(response) =>{
        console.log(response);
      }
    })
  }

  

}
