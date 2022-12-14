import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Person } from 'src/app/models/persons.model';
import { BuildingsService } from 'src/app/services/buildings.service';

@Component({
  selector: 'app-add-person',
  templateUrl: './add-person.component.html',
  styleUrls: ['./add-person.component.css']
})
export class AddPersonComponent implements OnInit {
  
  addPersonRequest : Person ={
    id: 0,
    firstName: '',
    lastName: '',
    personalCode:'',
    dateOfBirth: '',
    phoneNumber: '',
    email: '',
    apartmentId: 0
  }

  constructor(private personService:BuildingsService, private router:Router){}

  ngOnInit(): void {}
  
  
  addPerson(){
    this.personService.addPerson(this.addPersonRequest)
    .subscribe({
      next:(person) =>{
        this.router.navigate(['persons']);
      }
    })
  }
}
