import { Component, OnInit, Input } from '@angular/core';
import { products } from '../products';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css',],
})

export class HomeComponent implements OnInit {

  products = products;

  constructor() { }

  ngOnInit(): void {
  }

  share() {
    window.alert('The product has been shared!')
  }

  onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }
}

