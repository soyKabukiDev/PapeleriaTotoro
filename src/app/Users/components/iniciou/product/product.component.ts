import { Component } from '@angular/core';
import { inventoryService } from '../../../../administracion/components/Services/inventario.service';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  detail!: any[];
  constructor(private inventoryService: inventoryService){

  }
  ngOnInit(): void {
    this.loadinventory();
    
  }
  loadinventory(){
    this.inventoryService.getAllInventory().subscribe(
      (data) =>{
        this.detail=data;
       console.log(this.detail); 
      }
    );
  }

}
