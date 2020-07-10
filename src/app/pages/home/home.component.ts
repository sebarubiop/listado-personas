import { Component, OnInit } from '@angular/core';

import { PersonasService } from 'src/app/services/personas.service';
import { Persona } from 'src/app/interfaces/persona';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  personas: Persona[]
  displayedColumns: string[] = ['position','rut', 'name', 'lastname', 'age', 'address', 'actions'];

  constructor(
    private personasService: PersonasService
  ) { }

  ngOnInit(): void {
    this.getPersonas()
  }

  async getPersonas() {
    this.personas = await this.personasService.getPersonas().toPromise()
    if(this.personas) {
      console.log(this.personas)
    }
  }

  addPersona(persona: Persona) {
    console.log(persona)
  }

  editPersona(persona: Persona) {
    console.log(persona)
  }

  deletePersona(persona: Persona) {
    console.log(persona)
  }

}
