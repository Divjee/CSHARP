import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Apartment } from 'src/app/models/apartment.model';
import { BuildingsService } from 'src/app/services/buildings.service';

@Component({
  selector: 'app-add-apartment',
  templateUrl: './add-apartment.component.html',
  styleUrls: ['./add-apartment.component.css']
})
export class AddApartmentComponent implements OnInit {
  
  addApartmentRequest: Apartment = {
    id:0,
    apartmentNumber:0,
    floor:0,
    numberOfRooms:0,
    nrOfInhabitants:0,
    fullSqrMeters:0,
    livingAreaSqrMeters:0,
    buildingId:0
  };

  constructor(private apartmentService:BuildingsService, private router:Router){}

  ngOnInit(): void {}

  addApartment(){
    this.apartmentService.addApartment(this.addApartmentRequest)
    .subscribe({
      next:(apartment) =>{
        this.router.navigate(['apartments']);
      }
    })
  }
}
