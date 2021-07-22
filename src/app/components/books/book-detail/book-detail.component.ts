import {Component, OnInit} from '@angular/core';
import {Location} from "@angular/common";
import {BookService} from "../../../servies/book.service";
import {FormBuilder, FormGroup} from "@angular/forms";
import {ActivatedRoute} from "@angular/router";
import {Book} from "../book";

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {
  book: any

  constructor(private location: Location,
              private bookService: BookService,
              private fb: FormBuilder,
              private activated: ActivatedRoute) {
  }

  ngOnInit(): void {
    // @ts-ignore
    let id = +this.activated.snapshot.paramMap.get('id')
    this.bookService.getById(id).subscribe(res => {
      this.book = res;
    })
  }

  back() {
    this.location.back();
  }
}
