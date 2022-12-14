import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { Building } from 'src/app/models/building.model';
import { BuildingsService } from 'src/app/services/buildings.service';

@Component({
  selector: 'app-add-building',
  templateUrl: './add-building.component.html',
  styleUrls: ['./add-building.component.css']
})
export class AddBuildingComponent implements OnInit {
  
  addBuildingRequest: Building ={
    id:0,
    houseNumber:'',
    streetName:'',
    city:'',
    country:'',
    postalCode:''
  }
  constructor(private buildindService:BuildingsService, private router: Router){}
  
  ngOnInit(): void {
  
  }

  addBuilding(){
    this.buildindService.addBuilding(this.addBuildingRequest).subscribe({
      next:(building)=>{
        this.router.navigate(['buildings']);
      }
    })
  }
}
