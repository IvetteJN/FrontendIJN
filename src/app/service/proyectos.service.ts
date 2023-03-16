import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Proyectos } from '../model/proyectos';

@Injectable({
  providedIn: 'root'
})
export class ProyectosService {

  projectsURL = 'https://backend-ijn.onrender.com/proyectos/';

  URL = environment.URL + 'proyectos/';

  constructor(private httpClient : HttpClient) { }

  public lista(): Observable<Proyectos[]>{
    return this.httpClient.get<Proyectos[]>(this.projectsURL + 'lista');
  }

  public detail(id: number): Observable<Proyectos>{
    return this.httpClient.get<Proyectos>(this.projectsURL + `detail/${id}`);
  }

  public save(proyectos: Proyectos): Observable<any>{
    return this.httpClient.post<any>(this.projectsURL + 'create', proyectos);
  }

  public update(id: number, proyectos: Proyectos): Observable<any>{
    return this.httpClient.put<any>(this.projectsURL + `update/${id}`, proyectos);
  }

  public delete(id: number): Observable<any>{
    return this.httpClient.delete<any>(this.projectsURL + `delete/${id}`);
  }
}
