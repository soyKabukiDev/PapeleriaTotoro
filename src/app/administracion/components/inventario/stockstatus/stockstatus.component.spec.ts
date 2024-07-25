import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockstatusComponent } from './stockstatus.component';

describe('StockstatusComponent', () => {
  let component: StockstatusComponent;
  let fixture: ComponentFixture<StockstatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StockstatusComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StockstatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
