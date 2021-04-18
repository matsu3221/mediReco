import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookListComponent } from './book-list/book-list.component';
import { HomeComponent } from './home/home.component';
import { CoordinationComponent } from './coordination/coordination.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/' },
  { path: 'bookList', component: BookListComponent }, 
  { path: 'home', component: HomeComponent }, 
  { path:'root', component: HomeComponent},
  { path:'cordination', component: CoordinationComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
