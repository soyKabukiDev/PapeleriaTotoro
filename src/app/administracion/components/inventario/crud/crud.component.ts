import { Component, OnInit } from '@angular/core';
import { inventoryService } from '../../Services/inventario.service';

@Component({
  selector: 'app-crud',
  standalone: true,
  imports: [],
  templateUrl: './crud.component.html',
  styleUrl: './crud.component.css'
})
export class CrudComponent implements OnInit{
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
