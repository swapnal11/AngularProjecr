import { ProductModel } from '../product.model';
import { Injectable } from '../../../node_modules/@angular/core';

@Injectable({
    providedIn : 'root'
})
export class CartItemService
{
    currentItems:ProductModel[] = [];

    addtoCart(newItem : ProductModel)
    {
        this.currentItems.push(newItem);
    }
    removeFromCart(itemToBeRemoved)
    {
        let index=this.currentItems.findIndex(i => i.title ==itemToBeRemoved );
        this.currentItems.splice(index,1);
    }

  
}