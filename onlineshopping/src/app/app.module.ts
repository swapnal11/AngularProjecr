import { BrowserModule, ɵSharedStylesHost } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { ShoppingCartComponent } from './shoppingcart.components';
import { ProductComponent } from './product.components';
import { FormsModule } from '@angular/forms';
import { QuantityPipe } from './quantity.pipe';
import { CompanyComponent } from './company/company.component';
import { CartItemsComponent } from './cart/cart-items.component';
import { CartItemService } from './cart/cartitems.service';
import { HttpClientModule } from '@angular/common/http';
import { PostComponent } from './post/post.component';
import { NewproductComponent } from './newproduct/newproduct.component';
import { PostDetailsComponent } from './post-details/post-details.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth.guard';
import { MessageComponent } from './message/message.component';
import { LifeCycleHooksComponent } from './life-cycle-hooks/life-cycle-hooks.component';
import { HighlightDirective } from './highlight.directive';

/* 
const routes: Routes =[{ path :'' , component: ShoppingCartComponent},
              {path : 'post', component : PostComponent},
               {path : 'company', component : CompanyComponent},
               { path: 'details/:id', component: PostDetailsComponent},
              {path : 'addproduct' ,component :NewproductComponent}];
 */

const routes: Routes = [{ path: '', component: LoginComponent },
{
  path: 'dashboard', component: DashboardComponent,
  children: [{ path: '', component: ShoppingCartComponent },
  { path: 'post', component: PostComponent },
  { path: 'company', component: CompanyComponent },
  { path: 'details/:id', component: PostDetailsComponent },
  { path: 'addproduct', component: NewproductComponent },
  { path: 'lifecycle', component: MessageComponent }
  ],// canActivate : [AuthGuard]
}, { path: '**', redirectTo: '/' }];

@NgModule({
  declarations: [
    AppComponent, ShoppingCartComponent, ProductComponent, QuantityPipe, CompanyComponent, CartItemsComponent, PostComponent, NewproductComponent, PostDetailsComponent, DashboardComponent, LoginComponent, MessageComponent, LifeCycleHooksComponent, HighlightDirective
  ],
  imports: [
    BrowserModule,
    FormsModule, HttpClientModule, RouterModule.forRoot(routes)
  ],
  providers: [CartItemService],
  bootstrap: [AppComponent]
})
export class AppModule { }
