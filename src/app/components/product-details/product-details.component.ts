import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  constructor(public pictureUri: string,
              public name: string,
              public price: number,
              ) { }

  ngOnInit() {
    this.pictureUri = 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Bamboo_book_-_closed_-_UCR.jpg/1200px-Bamboo_book_-_closed_-_UCR.jpg';
    this.name = 'The Art of War';
    this.price = 30;
  }
}
