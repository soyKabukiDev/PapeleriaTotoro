import { Component, OnInit } from '@angular/core';
import {FormsModule} from '@angular/forms'
import { inventoryService } from '../../Services/inventario.service';
import { IpcNetConnectOpts } from 'net';
import { HttpEvent, HttpEventType } from '@angular/common/http';
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
    image_URL: null as File|null
  };
ngOnInit(): void {
}

onFileChange(event: any): void {
  const file = event.target.files[0];
  this.producto.image_URL = file;
  console.log(file);
}
Mostrar() {
  if (this.producto.image_URL) {
    const formData: FormData = new FormData();
    formData.append('name', this.producto.name);
    formData.append('description', this.producto.description);
    formData.append('price', this.producto.price.toString());
    formData.append('stock', this.producto.stock.toString());
    formData.append('image', this.producto.image_URL);

    this.inventorySer.postInventory(formData).subscribe(
      (event: HttpEvent<any>) => {
        if (event.type === HttpEventType.UploadProgress) {
          // Handle upload progress if needed
        } else if (event.type === HttpEventType.Response) {
          console.log('Producto creado:', event.body);
        }
      },
      (error) => {
        console.error('Error al crear el producto:', error);
      }
    );
  } else {
    console.error('No se ha seleccionado una imagen');
  }
}
}
