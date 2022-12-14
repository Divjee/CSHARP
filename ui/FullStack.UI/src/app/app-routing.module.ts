import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddApartmentComponent } from './components/apartments/add-apartment/add-apartment.component';
import { ApartmentListComponent } from './components/apartments/apartment-list/apartment-list.component';
import { EditApartmentComponent } from './components/apartments/edit-apartment/edit-apartment.component';
import { AddBuildingComponent } from './components/buildings/add-building/add-building.component';
import { BuildingListComponent } from './components/buildings/building-list/building-list.component';
import { EditBuildingComponent } from './components/buildings/edit-building/edit-building.component';
import { AddPersonComponent } from './components/persons/add-person/add-person.component';
import { EditPersonComponent } from './components/persons/edit-person/edit-person.component';
import { PersonListComponent } from './components/persons/person-list/person-list.component';

const routes: Routes = [
  
  {
    path:'buildings',
    component:BuildingListComponent
  },
  {
    path:'buildings/add',
    component:AddBuildingComponent
  },
  {
    path:'buildings/edit/:id',
    component:EditBuildingComponent
  },
  {
    path:'apartments',
    component:ApartmentListComponent
  },
  {
    path:'apartments/add',
    component:AddApartmentComponent
  },
  {
    path:'apartments/edit/:id',
    component:EditApartmentComponent
  },
  {
    path:'persons',
    component:PersonListComponent
  },
  {
    path:'persons/add',
    component:AddPersonComponent
  },
  {
    path:'persons/edit/:id',
    component:EditPersonComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
