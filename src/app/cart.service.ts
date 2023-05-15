import { Injectable } from '@angular/core';
import { Product } from './products';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CartService {
  items: Product[] = [];

  constructor(private http: HttpClient) { }

  addToCart(product: Product){
    this.items.push(product)
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    const items = this.items;
    this.items = [];
    return items;
  }

  getShippingPrice() {
    return this.http.get<{type: string, price: number}[]>
    ('../assets/shipping.json');
  }
 }
