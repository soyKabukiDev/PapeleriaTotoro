import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { NavbarComponent } from '../shared/navbar/navbar.component';
import { SidebarComponent } from '../shared/sidebar/sidebar.component';


@Component({
  selector: 'app-layout-administracion',
  standalone: true,
  imports: [RouterOutlet,RouterLink, RouterLinkActive, NavbarComponent, SidebarComponent],
  templateUrl: './layout-administracion.component.html',
  styleUrl: './layout-administracion.component.css'
})
export default class LayoutAdministracionComponent {

}
