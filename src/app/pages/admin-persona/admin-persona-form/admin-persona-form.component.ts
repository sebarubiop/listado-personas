import { Component, OnInit, Input } from '@angular/core';
import { Router } from "@angular/router";
import { Validators, FormGroup, FormBuilder, AbstractControl } from '@angular/forms';
import { Location } from '@angular/common';
import { Persona } from 'src/app/interfaces/persona';
import { ValidRut } from './customvalidator.validator'

@Component({
  selector: 'app-admin-persona-form',
  templateUrl: './admin-persona-form.component.html',
  styleUrls: ['./admin-persona-form.component.scss']
})
export class AdminPersonaFormComponent implements OnInit {

  @Input() persona: Persona
  personaForm: FormGroup
  id: string
  isAdd: boolean
  isEdit: boolean
  processing: boolean
  isError: boolean
  rutInvalid: boolean

  constructor(
    private router: Router,
    private _location: Location,
    private formBuilder: FormBuilder,
  ) {

  }

  ngOnInit() {
    const urlArray = this.router.url.substr(1).split('/')
    this.isAdd = urlArray[0].includes('add')
    this.isEdit = urlArray[0].includes('edit')
    this.createForm(this.persona)
    // console.log(this.rutValidator({value:'16476473-6'}))
  }

  private createForm(data: Persona) {
    this.personaForm = this.formBuilder.group({
      rutCtrl: [data?.rut, [
        Validators.required
      ]],
      nameCtrl: [data?.name, Validators.compose([
        Validators.required,
        Validators.maxLength(50),
      ])],
      lastnameCtrl: [data?.last_name, Validators.compose([
        Validators.required,
        Validators.maxLength(60),
      ])],
      ageCtrl: [data?.age],
      addressCtrl: [data?.address, Validators.compose([
        Validators.required,
        Validators.maxLength(400),
      ])],

    },
    {
      validator: ValidRut("rutCtrl")
    })
  }

  backClicked() {
    this._location.back();
  }

  submitPersona() {
    console.log()
    this.processing = true
    setTimeout(() => {
      this.router.navigate(["/"])
    }, 2000)
  }

}
