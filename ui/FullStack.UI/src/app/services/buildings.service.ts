import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http'
import { Building } from '../models/building.model';
import { Apartment } from '../models/apartment.model';
import { Person } from '../models/persons.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BuildingsService {

  baseApiUrl:string = 'https://localhost:7027/api'
  constructor(private http: HttpClient) { }

  getAllBuildings():Observable<Building[]>{
    return this.http.get<Building[]>(this.baseApiUrl+'/Building/GetAllBuildings');
  }

  addBuilding(addBuildingRequest:Building):Observable<Building>{
   return this.http.post<Building>(this.baseApiUrl + '/Building/CreateBuilding',addBuildingRequest)
  }

  getBuilding(id: string):Observable<Building>{
    return this.http.get<Building>(this.baseApiUrl+ '/Building/GetBuilding?Id='+id);
  }

  updateBuilding(updateBuildingRequest: Building):Observable<Building>{
    return this.http.put<Building>(this.baseApiUrl+ '/Building/UpdateBuilding',updateBuildingRequest);
  }

  deleteBuilding(id:number):Observable<Building>{
    return this.http.delete<Building>(this.baseApiUrl+ '/Building/DeleteBuilding?Id='+id);
  }

  getAllApartments():Observable<Apartment[]>{
    return this.http.get<Apartment[]>(this.baseApiUrl+'/Apartment/GetAllApartments');
  }
  
  addApartment(addApartmentRequest:Apartment):Observable<Apartment>{
    return this.http.post<Apartment>(this.baseApiUrl + '/Apartment/CreateApartment?BuildingId='+addApartmentRequest.buildingId,addApartmentRequest)
   }

   getApartment(id: string):Observable<Apartment>{
    return this.http.get<Apartment>(this.baseApiUrl+ '/Apartment/GetApartment?Id='+id);
  }
  updateApartment(addApartmentRequest: Apartment):Observable<Apartment>{
    return this.http.put<Apartment>(this.baseApiUrl+ '/Apartment/UpdateApartment?BuildingId='+addApartmentRequest.buildingId,addApartmentRequest);
  }

  deleteApartment(id:number):Observable<Apartment>{
    return this.http.delete<Apartment>(this.baseApiUrl+ '/Apartment/DeleteApartment?Id='+id);
  }

  getAllPersons():Observable<Person[]>{
    return this.http.get<Person[]>(this.baseApiUrl+'/Person/GetAllPersons');
  }

  addPerson(addPersonRequest:Person):Observable<Person>{
    return this.http.post<Person>(this.baseApiUrl + '/Person/CreatePerson?ApartmentId='+addPersonRequest.apartmentId,addPersonRequest);
   }
   getPerson(id: string):Observable<Person>{
    return this.http.get<Person>(this.baseApiUrl+ '/Person/GetPerson?Id='+id);
  }

  updatePerson(addPersonRequest: Person):Observable<Person>{
    return this.http.put<Person>(this.baseApiUrl+ '/Person/UpdatePerson?ApartmentId='+addPersonRequest.apartmentId,addPersonRequest);
  }

  deletePerson(id:number):Observable<Person>{
    return this.http.delete<Person>(this.baseApiUrl+ '/Person/DeletePerson?Id='+id);
  }
}
