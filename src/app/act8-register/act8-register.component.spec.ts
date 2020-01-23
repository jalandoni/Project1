import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Act8RegisterComponent } from './act8-register.component';

describe('Act8RegisterComponent', () => {
  let component: Act8RegisterComponent;
  let fixture: ComponentFixture<Act8RegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Act8RegisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Act8RegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
