import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ShopService } from 'src/app/services/shop.service';
import { ItemsModels } from 'src/app/shop/items/items.model';

@Component({
  selector: 'app-add-product-form',
  templateUrl: './add-product-form.component.html',
  styleUrls: ['./add-product-form.component.css']
})
export class AddProductFormComponent {
  type: any = {};
  imageLinks: string = '';
  secImageLinks: string = '';

  constructor(private shopService: ShopService) {

  }

  addItem(product: any) {
    // get array of types
    const typeArray = Object.keys(this.type).filter(key => this.type[key]);

    // convert textarea to array
    const imgLinks = this.imageLinks.split('\n');
    const secImgLinks = this.secImageLinks.split('\n');

    // convert form submission to ItemModel type
    const newItem = new ItemsModels(product.desc, imgLinks, product.itemName, "/", product.numSec, product.price, secImgLinks, typeArray)
    
    // push to backend
    this.shopService.addItem(newItem)
  }
}
