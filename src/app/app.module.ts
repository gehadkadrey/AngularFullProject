import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Component/header/header.component';
import { FooterComponent } from './Component/footer/footer.component';
import { FormsModule } from '@angular/forms';
import { CoreComponent } from './Component/core/core.component';
import { ServerElementComponent } from './Component/server-element/server-element.component';
import { ProductsComponent } from './Component/products/products.component';
import { AddProductComponent } from './Component/add-product/add-product.component';
import { MealsComponent } from './Component/meals/meals.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CoreComponent,
    ServerElementComponent,
    ProductsComponent,
    AddProductComponent,
    MealsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot( { timeOut: 800,  preventDuplicates: true,}), // ToastrModule added

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
