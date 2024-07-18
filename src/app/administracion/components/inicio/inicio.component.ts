import { Component } from '@angular/core';
import { FrameventasComponent } from './frameventas/frameventas.component';
import { FrameusuariosComponent } from './frameusuarios/frameusuarios.component';
import { FramehistorialventasComponent } from './framehistorialventas/framehistorialventas.component';
const Components = [ FrameventasComponent, FrameusuariosComponent, FramehistorialventasComponent] ; 

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [Components],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export default class InicioComponent {

}
