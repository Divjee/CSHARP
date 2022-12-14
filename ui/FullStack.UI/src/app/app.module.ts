import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BuildingListComponent } from './components/buildings/building-list/building-list.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AddBuildingComponent } from './components/buildings/add-building/add-building.component';
import { FormsModule } from '@angular/forms';
import { EditBuildingComponent } from './components/buildings/edit-building/edit-building.component';
import { ApartmentListComponent } from './components/apartments/apartment-list/apartment-list.component';
import { AddApartmentComponent } from './components/apartments/add-apartment/add-apartment.component';
import { EditApartmentComponent } from './components/apartments/edit-apartment/edit-apartment.component';
import { PersonListComponent } from './components/persons/person-list/person-list.component';
import { AddPersonComponent } from './components/persons/add-person/add-person.component';
import { EditPersonComponent } from './components/persons/edit-person/edit-person.component';

@NgModule({
  declarations: [
    AppComponent,
    BuildingListComponent,
    AddBuildingComponent,
    EditBuildingComponent,
    ApartmentListComponent,
    AddApartmentComponent,
    EditApartmentComponent,
    PersonListComponent,
    AddPersonComponent,
    EditPersonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
