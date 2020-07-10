import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, take } from 'rxjs/operators'

import { Persona } from '../interfaces/persona';

@Injectable({
  providedIn: 'root'
})
export class PersonasService {

  constructor(
    private http: HttpClient
  ) { }

  getPersonas() {
    return this.http.get<Persona[]>('/assets/personas.json').pipe(
      take(1),
      map(res => {
        res.forEach((value, index) => {
          value.id = index + 1
        })
        return res
      })
    )
  }
}
