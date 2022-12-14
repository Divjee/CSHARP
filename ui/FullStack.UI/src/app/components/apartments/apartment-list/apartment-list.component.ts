import { Component, OnInit } from '@angular/core';
import{Apartment} from 'src/app/models/apartment.model'
import { BuildingsService } from 'src/app/services/buildings.service';
@Component({
  selector: 'app-apartment-list',
  templateUrl: './apartment-list.component.html',
  styleUrls: ['./apartment-list.component.css']
})
export class ApartmentListComponent implements OnInit {
  
  apartments: Apartment[] = [];
  constructor(private apartmentService :BuildingsService){}

  ngOnInit(): void {
    this.apartmentService.getAllApartments()
    .subscribe({
      next:(apartments)=>{
        this.apartments = apartments;
        console.log(apartments);
      },
      error:(response) =>{
        console.log(response);
      }
    })
  }

}
