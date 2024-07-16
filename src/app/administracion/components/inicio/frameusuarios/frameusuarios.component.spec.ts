import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrameusuariosComponent } from './frameusuarios.component';

describe('FrameusuariosComponent', () => {
  let component: FrameusuariosComponent;
  let fixture: ComponentFixture<FrameusuariosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FrameusuariosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FrameusuariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
