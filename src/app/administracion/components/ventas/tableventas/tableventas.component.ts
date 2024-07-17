import { Component, OnInit } from '@angular/core';
import {ProductService} from '../../../../services/product.service';
@Component({
  selector: 'app-tableventas',
  templateUrl: './tableventas.component.html',
  standalone: true,
  imports: [],
  styleUrl: './tableventas.component.css'
})
export class TableventasComponent implements OnInit {
  detail: any;
  constructor (private productService: ProductService){

  }
  ngOnInit(): void {
    this.loadDetail();
  }
  loadDetail(){
    this.productService.getallDetail().subscribe(
      (data) => {
        this.detail = data;
  
      });
      console.log(this.detail);
  }
}
