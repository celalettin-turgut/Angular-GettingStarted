import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PrdouctListComponent } from './products/product-list.component';
import { ConvertToSpacesPipe } from './shared/convert-to-space.pipe';

@NgModule({
  declarations: [AppComponent, PrdouctListComponent, ConvertToSpacesPipe],
  imports: [BrowserModule, FormsModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
