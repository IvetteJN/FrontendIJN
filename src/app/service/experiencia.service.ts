import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Experiencia } from '../model/experiencia';

@Injectable({
  providedIn: 'root'
})
export class SExperienciaService {
  
  explabURL = 'https://backend-ijn.onrender.com/explab/'

  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<Experiencia[]>{
    return this.httpClient.get<Experiencia[]>(this.explabURL + 'lista');
  }

  public detail(id: number): Observable<Experiencia>{
    return this.httpClient.get<Experiencia>(this.explabURL + `detail/${id}`);
  } 

  public save(experiencia: Experiencia): Observable<any>{
    return this.httpClient.post<any>(this.explabURL + 'create', experiencia);
  }

  public update(id: number, experiencia: Experiencia): Observable<any>{
    return this.httpClient.put<any>(this.explabURL + `update/${id}`, experiencia);
  }

  public delete(id: number): Observable<any>{
    return this.httpClient.delete<any>(this.explabURL + `delete/${id}`);
  }
}
