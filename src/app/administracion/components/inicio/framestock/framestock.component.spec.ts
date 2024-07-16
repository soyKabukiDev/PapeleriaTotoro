import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FramestockComponent } from './framestock.component';

describe('FramestockComponent', () => {
  let component: FramestockComponent;
  let fixture: ComponentFixture<FramestockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FramestockComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FramestockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
