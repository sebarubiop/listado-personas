import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";

import { PersonasService } from 'src/app/services/personas.service';
import { Persona } from 'src/app/interfaces/persona';

@Component({
  selector: 'app-admin-persona',
  templateUrl: './admin-persona.component.html',
  styleUrls: ['./admin-persona.component.scss']
})
export class AdminPersonaComponent implements OnInit {

  id: string
  isAdd: boolean
  isEdit: boolean
  processing: boolean
  isError: boolean
  persona: Persona

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private personasService: PersonasService,
  ) { }

  async ngOnInit() {
    this.id = this.route.snapshot.paramMap.get("id")
    const urlArray = this.router.url.substr(1).split('/')
    this.isAdd = urlArray[0].includes('add')
    this.isEdit = urlArray[0].includes('edit')
    if (this.id && this.isEdit) {
      const response = await this.personasService.getSinglePersona(this.id).toPromise()
      if(response.success){
        this.persona = response.value
      } else {
        this.isError = true
      }
    }
  }

}
