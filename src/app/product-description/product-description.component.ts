import { Component, OnInit } from '@angular/core';

import { ProductService  } from '../product.service';

@Component({
  selector: 'app-product-description',
  templateUrl: './product-description.component.html',
  styleUrls: ['./product-description.component.css']
})
export class ProductDescriptionComponent implements OnInit {

  albumInfo : {
    id: number;
    name: string;
    releaseDate: string;
    coverImage: string;
    tracks: {
      trackNumber: number;
      trackName: string;
      trackLength: string;
      trackPrice: number;
    } []
  };

  constructor(private _productService: ProductService) { }

  ngOnInit() {
    this._productService.getAlbum(1).subscribe(response => this.albumInfo = response);
  }

}
