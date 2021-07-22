import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BookListComponent} from "./components/books/book-list/book-list.component";
import {BookAddComponent} from "./components/books/book-add/book-add.component";
import {AppComponent} from "./app.component";
import {BookUpdateComponent} from "./components/books/book-update/book-update.component";
import {BookDetailComponent} from "./components/books/book-detail/book-detail.component";

const routes: Routes = [
  {
    path: '',
    component: AppComponent,
    children: [
      {
        path: 'books',
        component: BookListComponent
      },
      {
        path: 'books/add',
        component: BookAddComponent
      },
      {
        path: 'books/:id/edit',
        component: BookUpdateComponent
      },
      {
        path: 'books/:id/detail',
        component: BookDetailComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
