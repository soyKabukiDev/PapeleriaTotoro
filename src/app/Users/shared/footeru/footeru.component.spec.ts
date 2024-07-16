import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooteruComponent } from './footeru.component';

describe('FooteruComponent', () => {
  let component: FooteruComponent;
  let fixture: ComponentFixture<FooteruComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FooteruComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FooteruComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
