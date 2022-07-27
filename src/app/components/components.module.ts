import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { RouterModule } from '@angular/router';
import {MatIconModule} from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProductInfoComponent } from './product-info/product-info.component';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { ProductShowComponent } from './product-show/product-show.component';
import { ClickOutsideModule } from 'ng-click-outside';

@NgModule({
  declarations: [
    HeaderComponent, 
    FooterComponent, 
    MainComponent, 
    ProductInfoComponent, 
    ProductShowComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatIconModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    ClickOutsideModule
  ],
  exports: [
    MatIconModule,
    BrowserAnimationsModule,
    ProductInfoComponent,
    MatButtonModule,
    ProductShowComponent

  ]
})
export class ComponentsModule { }
