import { Component, OnInit } from '@angular/core';
import { inventoryService } from '../../Services/inventario.service';
import { FormsModule } from '@angular/forms';
import { Product } from '../../../../interface/product';
import { UpdateService } from '../../Services/UpdateService.service';


@Component({
  selector: 'app-crud',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './crud.component.html',
  styleUrl: './crud.component.css'
})
export class CrudComponent implements OnInit{

  alertStatus: boolean = false;
  idP!: number;
  producto = {
    name: '',
    description: '',
    price: 0.00,
    stock: 0,
    image_URL: null as File|null
  };
  Product:Product | undefined ;
  detail!: any[];
  constructor(private inventoryService: inventoryService, private updateService: UpdateService){
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

  onFileChange(event: any): void {
    const file = event.target.files[0];
    this.producto.image_URL = file;
    console.log(file);
  }
  
  openPreviewModal(id: number): void {
    // Aquí puedes usar el id para abrir un modal de previsualización del producto con el id proporcionado
    console.log('Preview item with ID:', id);
    this.inventoryService.getProductById(id).subscribe(
      (data) => {
        this.Product = data;
        console.log('Product data:', this.Product);
        console.log('imagen',this.Product?.imageUrl )
      },
      (error) => {
        console.error('Error fetching product:', error);
      }
    );
  }

  openUpdateModal(id: number): void {
    console.log('Edit item with ID:', id);
    this.inventoryService.getProductById(id).subscribe(
      (data) => {
        this.Product = data;
        this.producto = {
          name: data.name || '',
          description: data.description || '',
          price: data.price || 0.00,
          stock: data.stock || 0,
          image_URL: null
        };
        console.log('Product data:', this.Product);
      },
      (error) => {
        console.error('Error fetching product:', error);
      }
    );
  }

  updateProduct(): void {
    const formData = new FormData();
    formData.append('name', this.producto.name);
    formData.append('description', this.producto.description);
    formData.append('price', this.producto.price.toString());
    formData.append('stock', this.producto.stock.toString());
    if (this.producto.image_URL) {
      formData.append('image', this.producto.image_URL);
    }
  
    const productId = this.Product?.id;
    if (productId === undefined) {
      console.error('Product ID is undefined.');
      return; // O lanza un error o maneja esta situación de otra manera.
    }
  
    this.inventoryService.updateProduct(productId, formData).subscribe(
      (response) => {
        console.log('Product updated successfully:', response);
        this.updateService.triggerUpdate();
        this.loadinventory();
      },
      (error) => {
        console.error('Error updating product:', error);
      }
    );
  }

  openDeleteModal(id: number): void {
    console.log('Delete item with ID:', id)
    this.idP= id
  }
  
  deleteProduct(){
    this.inventoryService.deleteProduct(this.idP).subscribe(
      (response) => {
        console.log('Producto eliminado correctamente.', response);
        this.alertStatus = true;
        this.loadinventory();
      },
      (error)=>{
        console.log('Error al eliminar.', error)
       }
    );
    
  }
  
}
