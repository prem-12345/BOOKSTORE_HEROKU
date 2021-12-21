import { Component, OnInit } from '@angular/core';
import { BooksService } from '../services/booksService/books.service';
import { Router } from '@angular/router';
import { DataService } from '../services/data service/data.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { EventEmitter, Inject, Output } from '@angular/core';

@Component({
  selector: 'app-update-book',
  templateUrl: './update-book.component.html',
  styleUrls: ['./update-book.component.scss']
})
export class UpdateBookComponent implements OnInit {

  book: any;
  bookName: any;
  author: any;
  description: any;
  quantity: any;
  price: any;
  discountPrice: any;
  bookid: any;

  UpdateForm!: FormGroup;
  submitted = false;

  constructor( private booksService: BooksService, private router: Router, private dataService : DataService, private formBuilder: FormBuilder, private _snackBar: MatSnackBar, public dialogRef: MatDialogRef<UpdateBookComponent> , @Inject(MAT_DIALOG_DATA) public data: any) 
  
  {

    this.bookName = data.bookName
    this.author = data.author
    this.description = data.description
    this.quantity = data.quantity
    this.price = data.price
    this.discountPrice = data.discountPrice
    this.bookid = data._id
    console.log(data);

   }

  ngOnInit(): void {
    this.book = this.data.element;
    this.UpdateForm = this.formBuilder.group({
      bookName: ['', [Validators.required]],
      author: ['', [Validators.required,]],
      description: ['', [Validators.required]],
      quantity: ['', [Validators.required]],
      price: ['', [Validators.required]],
      discountPrice: ['', [Validators.required]],
      service: ['advance']
    })
    
  }


  updateBook() {
    this.submitted = true
    let reqData = {
      "bookName": this.UpdateForm.value.bookName,
      "author": this.UpdateForm.value.author,
      "description": this.UpdateForm.value.description,
      "quantity": this.UpdateForm.value.quantity,
      "price": this.UpdateForm.value.price,
      "discountPrice": this.UpdateForm.value.discountPrice,
    }

    this.booksService.updateBooks(this.bookid, reqData).subscribe((result: any) => {
      console.log(result);
      this.dialogRef.close(result)



    })

  }

}
