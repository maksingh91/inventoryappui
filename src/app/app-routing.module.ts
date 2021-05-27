import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { CallbackComponent } from './callback/callback.component';
import { CreateProductComponent } from './create-product/create-product.component';
import { LoginComponent } from './login/login.component';
import { ProductListComponent } from './product-list/product-list.component';
import { SearchProductComponent } from './search-product/search-product.component';
import { UpdateProductComponent } from './update-product/update-product.component';
import { WebsocketProdutcsComponent } from './websocket-produtcs/websocket-produtcs.component';

const routes: Routes = [
  { path: '', redirectTo: 'products', pathMatch: 'full' },
  {path: 'login', component: LoginComponent},
  {path: 'callback', component: CallbackComponent},
  { path: 'products', component: ProductListComponent, canActivate: [AuthGuard] },
  { path: 'createProduct', component: CreateProductComponent, canActivate: [AuthGuard] },
  { path: 'updateProduct', component: UpdateProductComponent, canActivate: [AuthGuard] },
  { path: 'searchProduct', component: SearchProductComponent, canActivate: [AuthGuard] },
  { path: 'sseProduct', component: WebsocketProdutcsComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
