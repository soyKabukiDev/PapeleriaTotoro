import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormventasComponent } from './formventas.component';

describe('FormventasComponent', () => {
  let component: FormventasComponent;
  let fixture: ComponentFixture<FormventasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormventasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormventasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
