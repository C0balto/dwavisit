import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PerootComponent } from './peroot.component';

describe('PerootComponent', () => {
  let component: PerootComponent;
  let fixture: ComponentFixture<PerootComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PerootComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PerootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
