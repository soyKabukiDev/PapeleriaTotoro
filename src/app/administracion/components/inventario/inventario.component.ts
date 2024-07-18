import { Component, OnInit } from '@angular/core';
import { CrudComponent } from './crud/crud.component';
import { StockstatusComponent } from './stockstatus/stockstatus.component';
import { AgregarproductoComponent } from './agregarproducto/agregarproducto.component';


@Component({
  selector: 'app-inventario',
  standalone: true,
  imports: [CrudComponent,StockstatusComponent,AgregarproductoComponent],
  templateUrl: './inventario.component.html',
  styleUrl: './inventario.component.css'
})
export default class InventarioComponent{



}
