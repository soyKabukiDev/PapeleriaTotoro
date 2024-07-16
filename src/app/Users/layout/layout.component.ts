import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavuComponent } from '../shared/navu/navu.component';
import { FooteruComponent } from '../shared/footeru/footeru.component';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, NavuComponent, FooteruComponent],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export default class LayoutComponent {

}
