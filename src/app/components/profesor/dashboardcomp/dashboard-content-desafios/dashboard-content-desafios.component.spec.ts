import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardContentDesafiosComponent } from './dashboard-content-desafios.component';

describe('DashboardContentDesafiosComponent', () => {
  let component: DashboardContentDesafiosComponent;
  let fixture: ComponentFixture<DashboardContentDesafiosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardContentDesafiosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardContentDesafiosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
