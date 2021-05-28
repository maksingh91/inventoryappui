import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';
import { CreateProductComponent } from './create-product/create-product.component';
import { UpdateProductComponent } from './update-product/update-product.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MAT_FORM_FIELD_DEFAULT_OPTIONS} from '@angular/material/form-field';
import {MatNativeDateModule} from '@angular/material/core';
import { SearchProductComponent } from './search-product/search-product.component';
import { WebsocketProdutcsComponent } from './websocket-produtcs/websocket-produtcs.component';
import { LoginComponent } from './login/login.component';
import { CallbackComponent } from './callback/callback.component';
import { AuthHeaderInterceptor } from './auth-header.interceptor';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    CreateProductComponent,
    UpdateProductComponent,
    SearchProductComponent,
    WebsocketProdutcsComponent,
    LoginComponent,
    CallbackComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatNativeDateModule,
    ReactiveFormsModule, 
  ],
  providers: [
    { provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { appearance: 'fill' } },
    { provide: HTTP_INTERCEPTORS, useClass: AuthHeaderInterceptor, multi: true }
],
  bootstrap: [AppComponent]
})
export class AppModule { }
