import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FramehistorialventasComponent } from './framehistorialventas.component';

describe('FramehistorialventasComponent', () => {
  let component: FramehistorialventasComponent;
  let fixture: ComponentFixture<FramehistorialventasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FramehistorialventasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FramehistorialventasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
