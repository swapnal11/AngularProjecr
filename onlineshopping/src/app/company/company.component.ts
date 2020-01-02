import { Component, OnInit } from '@angular/core';
import { CompanyService } from './company.service';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css'],
  providers : [CompanyService]
})
export class CompanyComponent {

  companies : string []=[];
  //depedency injection in constructor
  constructor(public servObj :  CompanyService)
   {
  
    this.companies=this.servObj.getAllCompanies()
    //console.log(this.servObj.getAllCompanies());
   }

}
