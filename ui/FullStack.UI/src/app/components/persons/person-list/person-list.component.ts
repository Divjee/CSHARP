import { Component, OnInit } from '@angular/core';
import { Person } from 'src/app/models/persons.model';
import { BuildingsService } from 'src/app/services/buildings.service';

@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.css']
})
export class PersonListComponent implements OnInit {
  
  persons: Person[] = [];
  constructor(private persontService :BuildingsService){}
  
  ngOnInit(): void {
    this.persontService.getAllPersons()
    .subscribe({
      next:(persons)=>{
        this.persons = persons;
        console.log(persons);
      },
      error:(response) =>{
        console.log(response);
      }
    })
  }
  

}
