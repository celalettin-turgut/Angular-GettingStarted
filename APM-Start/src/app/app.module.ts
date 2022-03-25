import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'

import { AppComponent } from './app.component';
import { PrdouctListComponent } from './products/product-list.component';
import { ConvertToSpacesPipe } from './shared/convert-to-space.pipe';
import { StarComponent } from './shared/star.component';

@NgModule({
  declarations: [AppComponent, PrdouctListComponent, ConvertToSpacesPipe,StarComponent],
  imports: [BrowserModule, FormsModule, HttpClientModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
