import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BooksService } from '../services/booksService/books.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-books',
  templateUrl: './add-books.component.html',
  styleUrls: ['./add-books.component.scss']
})
export class AddBooksComponent implements OnInit {
  addbooksForm !: FormGroup;
  submitted = false;

  addToCart:boolean=false;

  constructor(private formBuilder: FormBuilder, private booksService: BooksService, private router: Router) { }

  ngOnInit(): void {

    this.addbooksForm = this.formBuilder.group({
      bookName: ['', Validators.required],
      author: ['', Validators.required],
      description: ['', Validators.required],
      quantity: ['', Validators.required],
      price: ['', Validators.required],
      discountPrice: ['', Validators.required],
      

    });

  }


  onSubmit() {

    this.submitted = true;

    if (this.addbooksForm.valid) {

      let reqData = {
        "bookName": this.addbooksForm.value.bookName,
        "author": this.addbooksForm.value.author,
        "description": this.addbooksForm.value.description,
        "quantity": this.addbooksForm.value.quantity,
        "price": this.addbooksForm.value.price,
        "discountPrice": this.addbooksForm.value.discountPrice,
          
      }
      this.booksService.addBooks(reqData).subscribe((response) => {
        console.log(response);
        this.router.navigate(['/admin'])
      })

    }
    else {
      console.log("invalid");

    }

  }
}
