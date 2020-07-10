import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPersonaFormComponent } from './admin-persona-form.component';

describe('AdminPersonaFormComponent', () => {
  let component: AdminPersonaFormComponent;
  let fixture: ComponentFixture<AdminPersonaFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminPersonaFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminPersonaFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
