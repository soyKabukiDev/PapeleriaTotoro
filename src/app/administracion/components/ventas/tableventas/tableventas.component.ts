import { Component, OnInit } from '@angular/core';
import {ProductService} from '../../../../services/product.service';
import { VentaService } from '../../Services/ventas.service';
@Component({
  selector: 'app-tableventas',
  templateUrl: './tableventas.component.html',
  standalone: true,
  imports: [],
  styleUrl: './tableventas.component.css'
})
export class TableventasComponent implements OnInit {
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
