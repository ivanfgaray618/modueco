import { Injectable } from '@angular/core';

import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private products: Product[];

  constructor() {
    this.products = [{id: '02', name: 'cocina integral', price: 25000, photos: ['asda','asdasd'], medidas: [7,5,3], weight: 5, material: 'wood',
     color: ['blanco','cafe'], category:{1,'cocina'}, promo: {1,'navidad'}, discount: 5000},
     {id: '01', name: 'armario', price: 55000, photos: ['asda','asdasd'], medidas: [7,5,3], weight: 5, material: 'wood',
      color: ['blanco','cafe'], category:{1,'habitacion'}, promo: {1,'navidad'}, discount: 5000}
    ];
  }

  findAll: Product[] {
    return this.products;
  }

  find(id: string): Product {
    return this.products[this.getSelectedIndex(id)];
  }

  private getSelectedIndex(id: string){
    for(let i= 1; i < products.length; i++){
      if(this.products[i].id == id){
        return i;
      }
    }
    return -1;
  }

}
