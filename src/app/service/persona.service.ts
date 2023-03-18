import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { persona } from '../model/persona.model';

@Injectable({
  providedIn: 'root'
})

export class PersonaService {
  
  personaURL = 'https://backend-ijn.onrender.com/persona/'

  constructor(private httpClient : HttpClient) { }

  public lista(): Observable<persona[]>{
    return this.httpClient.get<persona[]>(this.personaURL + 'lista');
  }

  public detail(id: number): Observable<persona>{
    return this.httpClient.get<persona>(this.personaURL + `detail/${id}`);
  }

  public update(id: number, Persona: persona): Observable<any>{
    return this.httpClient.put<any>(this.personaURL + `update/${id}`, Persona);
  }

}
