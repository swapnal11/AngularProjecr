import { Component, Input } from "@angular/core";
import { ProductService } from './product.service';
import { CartItemService } from './cart/cartitems.service';
import { ProductModel } from './product.model';


@Component({

    selector: 'shoppingcart',
    templateUrl: './shoppingcart.template.html'
   

})
export class ShoppingCartComponent {
    products:ProductModel[];

    constructor(public productObj:ProductService){
        this.products=this.productObj.getAllProducts();
    }
}