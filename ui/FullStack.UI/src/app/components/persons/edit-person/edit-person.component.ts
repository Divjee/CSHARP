import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Person } from 'src/app/models/persons.model';
import { BuildingsService } from 'src/app/services/buildings.service';

@Component({
  selector: 'app-edit-person',
  templateUrl: './edit-person.component.html',
  styleUrls: ['./edit-person.component.css']
})
export class EditPersonComponent implements OnInit {

  personDetails: Person = {
    id: 0,
    firstName: '',
    lastName: '',
    personalCode: '',
    dateOfBirth: '',
    phoneNumber: '',
    email: '',
    apartmentId: 0
  }
  
  constructor(private route: ActivatedRoute,private personService: BuildingsService,private router: Router){}
  
  ngOnInit(): void {
    this.route.paramMap.subscribe({
      next: (params) => {
        const id = params.get('id');

        if(id){
          this.personService.getPerson(id)
          .subscribe({
            next: (response)=>{
              this.personDetails = response;
            }
          });
        }
      }
    })
  }

  updatePerson(){
    this.personService.updatePerson(this.personDetails)
    .subscribe({
      next:(response) =>{
        this.router.navigate(['persons']);
      }
    });
  }

  deletePerson(id:number){
    this.personService.deletePerson(id)
    .subscribe({
      next:(response) =>{
        this.router.navigate(['persons']);
      }
    })

  }
}