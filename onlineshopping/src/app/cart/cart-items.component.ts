
import { Component } from '@angular/core';
import {CartItemService} from './cartitems.service';

@Component({
selector: 'cartitems',
templateUrl: './cartitems.template.html',
//styleUrls: ['./cart-items.component.css']
})
export class CartItemsComponent {

constructor(public cartItemsSerObj:CartItemService){
}
} 
 
