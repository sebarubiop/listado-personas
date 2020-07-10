import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: 'app-admin-persona',
  templateUrl: './admin-persona.component.html',
  styleUrls: ['./admin-persona.component.scss']
})
export class AdminPersonaComponent implements OnInit {

  id: string

  constructor(
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get("id")
    console.log(this.id)
  }

}
