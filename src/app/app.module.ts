import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {QuillModule} from 'ngx-quill';

import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PdfComponent } from './pdf/pdf.component';
import {enableProdMode} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { appRoutes } from './app.routing';
@NgModule({
  declarations: [
    AppComponent,
    PdfComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    QuillModule,
    RouterModule.forRoot(appRoutes),
    FormsModule               
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
