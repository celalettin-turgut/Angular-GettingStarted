import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Product } from '../interfaces/product';
import { ImageService } from './image-service';
//import data from '../../api/products/products.json';
import { ProductService } from './product.service';
@Component({
  selector: 'pm-products',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class PrdouctListComponent implements OnInit, OnDestroy {
  pageTitle: string = 'Products';
  listFilter: string = '';
  showImage: boolean = false;
  imageWidth: number = 50;
  imageMargin: number = 2;
  errorMessage: any;
  sub!: Subscription;
  toggleImage() {
    this.showImage = !this.showImage;
  }
  products: Product[] = [];

  filteredProducts() {
    return this.products.filter((product) =>
      product.productName.includes(this.listFilter)
    );
  }

  constructor(
    private productService: ProductService,
    private imageService: ImageService
  ) {}

  ngOnInit() {
    this.sub = this.productService.getProducts().subscribe({
      next: (products) => (this.products = products),
      error: (err) => (this.errorMessage = err),
    });
    
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  onNotify(message: string) {
    console.log('parent', message);
  }
}
