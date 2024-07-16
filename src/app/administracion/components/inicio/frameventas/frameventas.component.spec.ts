import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrameventasComponent } from './frameventas.component';

describe('FrameventasComponent', () => {
  let component: FrameventasComponent;
  let fixture: ComponentFixture<FrameventasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FrameventasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FrameventasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
