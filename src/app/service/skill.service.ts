import { HttpClient } from '@angular/common/http';
import { identifierName } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Skill } from '../model/skill';

@Injectable({
  providedIn: 'root'
})
export class SkillService {

  skillsURL = 'https://backend-ijn.onrender.com/skill/'
  
  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<Skill[]>{
    return this.httpClient.get<Skill[]>(this.skillsURL + 'lista');
  }

  public detail(id: number): Observable<Skill>{
    return this.httpClient.get<Skill>(this.skillsURL + `detail/${id}`);
  }

  public save(skill: Skill): Observable<any>{
    return this.httpClient.post<any>(this.skillsURL + 'create', skill);
  }

  public update(id: number, skill: Skill): Observable<any>{
    return this.httpClient.put<any>(this.skillsURL + `update/${id}`, skill);
  }

  public delete(id: number): Observable<any>{
    return this.httpClient.delete(this.skillsURL + `delete/${id}`);
  }
}
