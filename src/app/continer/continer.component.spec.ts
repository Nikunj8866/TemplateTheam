import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContinerComponent } from './continer.component';

describe('ContinerComponent', () => {
  let component: ContinerComponent;
  let fixture: ComponentFixture<ContinerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContinerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContinerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
