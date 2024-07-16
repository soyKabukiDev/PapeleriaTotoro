import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableventasComponent } from './tableventas.component';

describe('TableventasComponent', () => {
  let component: TableventasComponent;
  let fixture: ComponentFixture<TableventasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TableventasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableventasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
