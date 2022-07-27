import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-product-catalogue',
  templateUrl: './product-catalogue.component.html',
  styleUrls: ['./product-catalogue.component.scss'],
})
export class ProductCatalogueComponent implements OnInit {
  favoriteSeason!: string;
  seasons: string[] = ['Nothing', 'Samsung', 'Xiomi', 'One Plus'];

  starsCount = [0,1,2,3,4];

  products = [0,1,2,3,4,5,6,7,8,9]

  price = this._formBuilder.group({
    1: false,
    2: false,
    3: false,
    4: false
  });

  stars = this._formBuilder.group({
    1: false,
    2: false,
    3: false,
    4: false
  });

  constructor(private _formBuilder: FormBuilder) {}

  ngOnInit(): void {}
}
