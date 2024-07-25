import { Component, OnInit } from '@angular/core';
import { inventoryService } from '../../Services/inventario.service';
import { UpdateService } from '../../Services/UpdateService.service';

@Component({
  selector: 'app-stockstatus',
  standalone: true,
  imports: [],
  templateUrl: './stockstatus.component.html',
  styleUrl: './stockstatus.component.css'
})
export class StockstatusComponent implements OnInit{
  detail!: any[];
  constructor(private inventoryService: inventoryService, private updateService: UpdateService){

  }
  ngOnInit(): void {
    this.updateService.getUpdateObservable().subscribe(() => {
      this.loadinventory(); // Recargar los datos cuando se notifique una actualización
    });
    this.loadinventory();
    
  }
  loadinventory(): void{
    this.inventoryService.getAllInventory().subscribe(
      (data) =>{
        this.detail=data;
       console.log(this.detail); 
      }
    );
  }
}
