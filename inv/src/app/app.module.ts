import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

// Add firebase
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { environment } from '../environments/environment';

import { PWSMaterialModule } from './PWSMaterial.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { CategoriesComponent } from './comps/categories/categories.component';
import { CategoryComponent } from './comps/categories/category/category.component';
import { CategoryListComponent } from './comps/categories/category-list/category-list.component';
import { CustomersComponent } from './comps/customers/customers.component';
import { CustomerComponent } from './comps/customers/customer/customer.component';
import { CustomerListComponent } from './comps/customers/customer-list/customer-list.component';
import { HomeComponent } from './comps/home/home.component';
import { ELoginComponent } from './comps/e-login/e-login.component';
import { SignUpComponent } from './comps/sign-up/sign-up.component';
import { InvoicesComponent } from './comps/invoices/invoices.component';
import { InvoiceComponent } from './comps/invoices/invoice/invoice.component';
import { InvoiceListComponent } from './comps/invoices/invoice-list/invoice-list.component';
import { NavbarComponent } from './comps/navbar/navbar.component';
import { ProductsComponent } from './comps/products/products.component';
import { ProductComponent } from './comps/products/product/product.component';
import { ProductListComponent } from './comps/products/product-list/product-list.component';
import { ConfirmDialogComponent } from './comps/confirm-dialog/confirm-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    CategoriesComponent,
    CategoryComponent,
    CategoryListComponent,
    CustomersComponent,
    CustomerComponent,
    CustomerListComponent,
    HomeComponent,
    ELoginComponent,
    InvoicesComponent,
    InvoiceComponent,
    InvoiceListComponent,
    NavbarComponent,
    ProductsComponent,
    ProductComponent,
    ProductListComponent,
    ConfirmDialogComponent,
    SignUpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore()),
    provideAuth(() => getAuth()),
    PWSMaterialModule,
    FlexLayoutModule
  ],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }
