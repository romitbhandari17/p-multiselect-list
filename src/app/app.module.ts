import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PMultiselectListComponent } from './p-multiselect-list/p-multiselect-list.component';

@NgModule({
  declarations: [
    AppComponent,
    PMultiselectListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
