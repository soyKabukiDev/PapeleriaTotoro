import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistousersComponent } from './registousers.component';

describe('RegistousersComponent', () => {
  let component: RegistousersComponent;
  let fixture: ComponentFixture<RegistousersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegistousersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistousersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
