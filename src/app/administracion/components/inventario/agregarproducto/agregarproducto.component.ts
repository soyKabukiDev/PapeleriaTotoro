import { Component, OnInit } from '@angular/core';
import {FormsModule} from '@angular/forms'
import { inventoryService } from '../../Services/inventario.service';
import { IpcNetConnectOpts } from 'net';
@Component({
  selector: 'app-agregarproducto',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './agregarproducto.component.html',
  styleUrl: './agregarproducto.component.css'
})
export class AgregarproductoComponent implements OnInit {
  constructor(private inventorySer: inventoryService) { }
  
  producto = {
    name: '',
    description: '',
    price: 0.00,
    stock: 0,
    image_URL: ''
  };
ngOnInit(): void {
}
Mostrar(){
  this.inventorySer.postInventory(this.producto).subscribe(
    
    (response) => {
      console.log('Producto creado:', response);
      console.log(this.producto);
    }
    
  );
}
}
