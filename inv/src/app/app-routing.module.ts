import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { CategoriesComponent } from './comps/categories/categories.component';
import { CategoryListComponent } from './comps/categories/category-list/category-list.component';
import { CustomersComponent } from './comps/customers/customers.component';
import { CustomerComponent } from './comps/customers/customer/customer.component';
import { CustomerListComponent } from './comps/customers/customer-list/customer-list.component';
import { HomeComponent } from './comps/home/home.component';
import { ELoginComponent } from './comps/e-login/e-login.component';
import { InvoicesComponent } from './comps/invoices/invoices.component';
import { InvoiceComponent } from './comps/invoices/invoice/invoice.component';
import { InvoiceListComponent } from './comps/invoices/invoice-list/invoice-list.component';
import { NavbarComponent } from './comps/navbar/navbar.component';
import { ProductsComponent } from './comps/products/products.component';
import { AuthGuard } from './services/auth.guard';

const routes: Routes = [
  {path: 'products', canActivate: [AuthGuard], component: ProductsComponent},
  {path: 'categories', canActivate: [AuthGuard], component: CategoriesComponent},
  {path: 'customers', canActivate: [AuthGuard], component: CustomersComponent},
  {path: 'invoices', canActivate: [AuthGuard], component: InvoicesComponent},
  {path: 'invoices-list', canActivate: [AuthGuard], component: InvoiceListComponent},
  {path: 'home', canActivate: [AuthGuard], component: HomeComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'ilogin', component : ELoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
