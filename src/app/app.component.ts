import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FlowbiteService } from './services/flowbite.service';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'PapeleriaApp';

  constructor(private flowbiteService: FlowbiteService){}

  ngOnInit(): void {
    this.flowbiteService.loadFlowbite(flowbite => {
      console.log('Flowbite loaded', flowbite);
    });
  }
}
