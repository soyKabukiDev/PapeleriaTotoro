import { Component } from '@angular/core';
import { VentaService } from '../../Services/ventas.service';

@Component({
  selector: 'app-frameventas',
  standalone: true,
  imports: [],
  templateUrl: './frameventas.component.html',
  styleUrl: './frameventas.component.css'
})
export class FrameventasComponent {

  detail!: any[];
  constructor(private ventaService: VentaService){

  }
  ngOnInit(): void {
    this.loadSell();
    
  }
  loadSell(){
    this.ventaService.getAllDetail().subscribe(
      (data) =>{
        this.detail=data;
      }
     
    );
  }

}
