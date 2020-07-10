import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPersonaComponent } from './admin-persona.component';

describe('AdminPersonaComponent', () => {
  let component: AdminPersonaComponent;
  let fixture: ComponentFixture<AdminPersonaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminPersonaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminPersonaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
