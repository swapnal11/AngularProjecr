import { Component, OnInit } from '@angular/core';
import { ProductModel } from '../product.model';
import { ProductService } from '../product.service';
import { Router } from '../../../node_modules/@angular/router';


@Component({
  selector: 'app-newproduct',
  templateUrl: './newproduct.component.html',
  styleUrls: ['./newproduct.component.css'],
  providers : [ProductService]
})
export class NewproductComponent {

  newproduct:ProductModel = new ProductModel(); 
  
  constructor(public prodServeObj : ProductService,public router : Router) { }

  AddNewProduct()
  {
    this.prodServeObj.addAProduct(this.newproduct);
    this.newproduct=new ProductModel();
    

    //navigate
    this.router.navigate(["/dashboard"]);
  }

}
