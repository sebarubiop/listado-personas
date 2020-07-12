import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

import { PersonasService } from 'src/app/services/personas.service';
import { Persona } from 'src/app/interfaces/persona';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  personas: Persona[]
  displayedColumns: string[] = ['position', 'rut', 'name', 'lastname', 'age', 'address', 'actions'];
  isError: boolean

  constructor(
    private router: Router,
    private personasService: PersonasService,
  ) { }

  ngOnInit(): void {
    this.getPersonas()
  }

  async getPersonas() {
    const response = await this.personasService.getPersonas().toPromise()
    if (response.success) {
      this.personas = response.value
    } else {
      this.isError = true
      console.log(response.message)
    }
  }

  addPersona() {
    // console.log(persona)
    this.router.navigate(['/add', 'new'])
  }

  editPersona(persona: Persona) {
    this.router.navigate(['/edit', persona._id])
  }

  async deletePersona(persona: Persona) {
    const response = await this.personasService.deletePersona(persona._id).toPromise()
    if (response.success) {
      // console.log(response.value)
      this.personas = this.personas.filter(p => p._id !== response.value._id)
    } else {
      this.isError = true
      console.log(response.message)
    }
  }

}
