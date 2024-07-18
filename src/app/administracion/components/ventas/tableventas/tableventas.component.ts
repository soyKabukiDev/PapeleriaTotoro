import { Component, OnInit } from '@angular/core';
import {ProductService} from '../../../../services/product.service';
import { ventaService } from '../../Services/ventas.service';
@Component({
  selector: 'app-tableventas',
  templateUrl: './tableventas.component.html',
  standalone: true,
  imports: [],
  styleUrl: './tableventas.component.css'
})
export class TableventasComponent implements OnInit {
  detail!: any[];
  constructor(private ventaService: ventaService){

  }
  ngOnInit(): void {
    this.loadSell();
    
  }
  loadSell(){
    this.ventaService.getallDetail().subscribe(
      (data) =>{
        this.detail=data;
      }
     
    );
  }
}
