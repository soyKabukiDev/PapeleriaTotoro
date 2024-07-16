import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import LoginComponent from '../../auth/login/login.component';


@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterLink, LoginComponent],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  userlogginOn:boolean = true;

}
