import { Component, Input } from "@angular/core";
import { ProductService } from './product.service';
import { CartItemService } from './cart/cartitems.service';


@Component({

    selector: 'product',
    templateUrl: './product.template.html',
    styleUrls: ['./product.style.css']


})
export class ProductComponent {

    constructor(public prodServeObj: ProductService, public cartObj: CartItemService) {

    }
    @Input() productdetails: any;
    isSelected: boolean = false;

    incrementLikes() {
        this.productdetails.likes += 1;
    }
    DeleteProduct() {
        this.prodServeObj.deleteProduct(this.productdetails.title);
    }
    AddtoCart() {
        if (this.isSelected) {
            this.cartObj.addtoCart(this.productdetails);
        }
        else
            this.cartObj.removeFromCart(this.productdetails.title)
    }
}
