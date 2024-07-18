import { Component } from '@angular/core';
import { CrudComponent } from './crud/crud.component';

@Component({
  selector: 'app-inventario',
  standalone: true,
  imports: [CrudComponent],
  templateUrl: './inventario.component.html',
  styleUrl: './inventario.component.css'
})
export default class InventarioComponent {

}
