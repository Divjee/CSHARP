import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Apartment } from 'src/app/models/apartment.model';
import { BuildingsService } from 'src/app/services/buildings.service';

@Component({
  selector: 'app-edit-apartment',
  templateUrl: './edit-apartment.component.html',
  styleUrls: ['./edit-apartment.component.css']
})
export class EditApartmentComponent implements OnInit {

  apartmentDetails: Apartment = {
    id: 0,
    apartmentNumber: 0,
    floor: 0,
    numberOfRooms: 0,
    nrOfInhabitants: 0,
    fullSqrMeters: 0,
    livingAreaSqrMeters: 0,
    buildingId: 0
  }
  
  constructor(private route: ActivatedRoute,private apartmentService: BuildingsService,private router: Router){}
  
  ngOnInit(): void {
    this.route.paramMap.subscribe({
      next: (params) => {
        const id = params.get('id');

        if(id){
          this.apartmentService.getApartment(id)
          .subscribe({
            next: (response)=>{
              this.apartmentDetails = response;
            }
          });
        }
      }
    })
  }

  updateApartment(){
    this.apartmentService.updateApartment(this.apartmentDetails)
    .subscribe({
      next:(response) =>{
        this.router.navigate(['apartments']);
      }
    });
  }

  deleteApartment(id:number){
    this.apartmentService.deleteApartment(id)
    .subscribe({
      next:(response) =>{
        this.router.navigate(['apartments']);
      }
    })
  }

}
