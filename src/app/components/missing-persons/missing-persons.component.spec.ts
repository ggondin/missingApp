import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MissingPersonsComponent } from './missing-persons.component';

describe('MissingPersonsComponent', () => {
  let component: MissingPersonsComponent;
  let fixture: ComponentFixture<MissingPersonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MissingPersonsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MissingPersonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
