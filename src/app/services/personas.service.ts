import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, take } from 'rxjs/operators'

import { environment } from "src/environments/environment";
import { Persona } from '../interfaces/persona';

export interface PersonasResponse {
  success: boolean
  message: string
  value: Persona[]
}
export interface PersonaResponse {
  success: boolean
  message: string
  value: Persona
}
@Injectable({
  providedIn: 'root'
})
export class PersonasService {

  constructor(
    private http: HttpClient
  ) { }

  getPersonas() {
    return this.http.get<PersonasResponse>(`${environment.apiUrl}/api`).pipe(
      take(1),
      map(res => {
        if(res.success){
          res.value.forEach((r, index) => {
            r.id = index + 1
          })
          return res
        }
      })
    )
  }

  getSinglePersona(id: string) {
    return this.http.get<PersonaResponse>(`${environment.apiUrl}/api/${id}`).pipe(
      take(1)
    )
  }

  addPersona(data: Persona) {
    return this.http.post<PersonaResponse>(`${environment.apiUrl}/api`, data).pipe(
      take(1)
    )
  }

  updatePersona(id: string, data: Persona) {
    return this.http.put<PersonaResponse>(`${environment.apiUrl}/api/${id}`, data).pipe(
      take(1)
    )
  }

  deletePersona(id: string) {
    return this.http.delete<PersonaResponse>(`${environment.apiUrl}/api/${id}`).pipe(
      take(1)
    )
  }
}
