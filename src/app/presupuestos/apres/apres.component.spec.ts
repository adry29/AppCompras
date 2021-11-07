import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApresComponent } from './apres.component';

describe('ApresComponent', () => {
  let component: ApresComponent;
  let fixture: ComponentFixture<ApresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
