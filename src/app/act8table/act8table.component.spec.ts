import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Act8tableComponent } from './act8table.component';

describe('Act8tableComponent', () => {
  let component: Act8tableComponent;
  let fixture: ComponentFixture<Act8tableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Act8tableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Act8tableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
