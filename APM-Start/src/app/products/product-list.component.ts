import { Component, OnInit } from '@angular/core';
import { Product } from '../interfaces/product';
import data from '../../api/products/products.json';
@Component({
  selector: 'pm-products',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class PrdouctListComponent implements OnInit {
   pageTitle: string = 'Products';
  listFilter: string = '';
  showImage: boolean = false;
  imageWidth: number = 50;
  imageMargin: number = 2;
  toggleImage() {
    this.showImage = !this.showImage;
  }
  products: Product[] = data;

  ngOnInit() {
    console.log('json data', data);
  }
}
