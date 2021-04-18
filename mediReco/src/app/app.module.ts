import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookListComponent } from './book-list/book-list.component';

import { MatIconModule } from '@angular/material/icon';  // <-- 追加
import { MatToolbarModule } from '@angular/material/toolbar';  // <-- 追加
import { MatSidenavModule } from '@angular/material/sidenav';  // <-- 追加
import { MatListModule } from '@angular/material/list';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { CoordinationComponent } from './coordination/coordination.component';

@NgModule({
  declarations: [
    AppComponent,
    BookListComponent,
    HomeComponent,
    CoordinationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatSidenavModule,
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    DragDropModule,
    MatButtonModule,
    MatFormFieldModule,
    MatSelectModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
