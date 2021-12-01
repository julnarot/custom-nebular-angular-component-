import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DualExampleComponent } from './dual-example.component';

describe('DualExampleComponent', () => {
  let component: DualExampleComponent;
  let fixture: ComponentFixture<DualExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DualExampleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DualExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
