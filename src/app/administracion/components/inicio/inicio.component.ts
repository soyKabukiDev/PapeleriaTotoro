import { Component } from '@angular/core';
import { FrameventasComponent } from './frameventas/frameventas.component';
import { FrameusuariosComponent } from './frameusuarios/frameusuarios.component';
import { FramestockComponent } from './framestock/framestock.component';
const Components = [ FrameventasComponent, FrameusuariosComponent, FramestockComponent] ; 

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [Components],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export default class InicioComponent {

}
