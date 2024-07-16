import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IniciouComponent } from './iniciou.component';

describe('IniciouComponent', () => {
  let component: IniciouComponent;
  let fixture: ComponentFixture<IniciouComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IniciouComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IniciouComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
