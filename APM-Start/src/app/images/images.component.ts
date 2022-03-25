import { Component, OnInit } from '@angular/core';
import { Image } from '../interfaces/image';
import { ImageService } from '../products/image-service';

@Component({
  selector: 'pm-images',
  templateUrl: './images.component.html',
})
export class ImagesComponent implements OnInit {
    images:Image[] = []
  constructor(private imageService: ImageService) {}

  ngOnInit(): void {
    this.imageService.getImages().subscribe(
      (response) => this.images = response,
      (error) => {console.log('error')},
      () => {console.log(this.images)}
    );
  }
}
