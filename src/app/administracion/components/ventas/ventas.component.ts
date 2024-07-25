import { Component} from '@angular/core';
import { FormventasComponent } from './formventas/formventas.component';
import { TableventasComponent } from "./tableventas/tableventas.component";

@Component({
  selector: 'app-ventas',
  standalone: true,
  imports: [FormventasComponent, TableventasComponent],
  templateUrl: './ventas.component.html',
  styleUrl: './ventas.component.css'
})
export default class VentasComponent {

}
