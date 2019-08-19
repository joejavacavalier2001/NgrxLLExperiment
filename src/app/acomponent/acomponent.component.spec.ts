import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AComponentComponent } from './acomponent.component';

describe('AComponentComponent', () => {
  let component: AComponentComponent;
  let fixture: ComponentFixture<AComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
