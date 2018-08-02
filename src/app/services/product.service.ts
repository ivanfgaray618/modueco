import { Injectable } from '@angular/core';

import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private products: Product[];

  constructor() {
    this.products = [
      {id: '02', name: 'cocina integral', price: 25000, photos: ['./assets/img/0.jpg','asdasd'], medidas: [7,5,3], weight: 5, material: 'wood',
      color: ['blanco','cafe'], category:{id:1,name:'cocina'}, promo: {id:1,name:'navidad'}, discount: 5000},
     {id: '01', name: 'armario', price: 55000, photos: ['./assets/img/0.jpg','asdasd'], medidas: [7,5,3], weight: 5, material: 'wood',
     color: ['blanco','cafe'], category:{id:2,name:'habitacion'}, promo: {id:1,name:'navidad'}, discount: 5000}
    ];
  }

  findAll(): Product[] {
    return this.products;
  }

  find(id: string): Product {
    return this.products[this.getSelectedIndex(id)];
  }

  private getSelectedIndex(id: string){
    for(var i= 1; i < this.products.length; i++){
      if(this.products[i].id == id){
        return i;
      }
    }
    return -1;
  }
}
