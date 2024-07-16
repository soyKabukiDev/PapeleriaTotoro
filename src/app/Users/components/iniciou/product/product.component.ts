import { Component } from '@angular/core';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  items= 12;

  getRepetitionCount(count: number): number[] {
    return Array(count).fill(0).map((_x, i) => i);
  }

}
