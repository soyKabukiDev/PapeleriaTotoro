import { Component} from '@angular/core';
import { FormventasComponent } from './formventas/formventas.component';

@Component({
  selector: 'app-ventas',
  standalone: true,
  imports: [FormventasComponent],
  templateUrl: './ventas.component.html',
  styleUrl: './ventas.component.css'
})
export default class VentasComponent {

}
