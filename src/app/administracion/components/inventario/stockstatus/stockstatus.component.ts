import { Component, OnInit } from '@angular/core';
import { inventoryService } from '../../Services/inventario.service';

@Component({
  selector: 'app-stockstatus',
  standalone: true,
  imports: [],
  templateUrl: './stockstatus.component.html',
  styleUrl: './stockstatus.component.css'
})
export class StockstatusComponent implements OnInit{
  detail!: any[];
  constructor(private inventoryService: inventoryService){

  }
  ngOnInit(): void {
    this.loadinventory();
    
  }
  loadinventory(){
    this.inventoryService.getallInventory().subscribe(
      (data) =>{
        this.detail=data;
       console.log(this.detail); 
      }
    );
  }
}
