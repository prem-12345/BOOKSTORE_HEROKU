import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BooksService } from '../services/booksService/books.service';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-get-all-books',
  templateUrl: './get-all-books.component.html',
  styleUrls: ['./get-all-books.component.scss']
})
export class GetAllBooksComponent implements OnInit {
  booksArray: any;
  bookcount: any;
  token: any;
  hideTitle:boolean=true;
  data: any;
  totalLength:any;
  page:number = 1;
  cartitems: any;
  count: any;
  hide:boolean=false;

  constructor( private router: Router, private booksService: BooksService ,private _snackBar:MatSnackBar) { }

  ngOnInit(): void {
    this.token = localStorage.getItem('token')
    this.getBooks();
    this.cartItemList();
  }

  getBooks() {

    this.booksService.getBooksService().subscribe((response: any) => {
        console.log(response.result)
        this.booksArray = response.result;
        this.bookcount = response.result.length;
        this.totalLength = response.result.length;
        console.log("getBooksArray", this.booksArray);

        this.booksArray.map((book:any) => {
          book.isCarted =false;
          return book;
      })


      })
  }

  cartItemList() {
    this.booksService.getCartItems().subscribe((response: any) => {
        console.log("cart item list",response);
        this.cartitems = response.result;
        console.log(this.cartitems);
        this.count = response.result.length;
      })
  }

  onBookDetails(book:any){
    localStorage.setItem('bookId',book._id);
    console.log("id",book._id);
    this.router.navigateByUrl('/book-details/'+book._id)
  
  }

  sortlowtohigh(){
    this.booksArray.sort((a:any,b:any) => a.price - (b.price));
    this.hideTitle=false;
  }
  sorthightolow(){
    this.booksArray.sort((a:any,b:any) => b.price - (a.price));
    this.hideTitle=false;
  }

  newestarrivalse(){
    this.booksArray.reverse()
    this.hideTitle=false;
  }

  
  addtowishlist(book:any) {
    this.booksService.addwishlist(book._id).subscribe(
      (response: any) => {
        console.log(response);
        this._snackBar.open('book added to wishlist successful', '', {
          duration: 2000,
        })
      },
      (error:any) => console.log(error)
    )
  }

  addtobag(book:any){

    if(book.isCarted == false){
      this.booksService.addcartitem(book._id).subscribe((response) => {
        console.log(response);
        this.cartitems.map((book:any) => {
          book.isCarted =true;
          this.hide = true;
          return book;
      })
        this._snackBar.open('book added to cart successful', '', {
          duration: 2000,
        })
      },
        (error) => console.log(error)
      )
    } else{
      this._snackBar.open('book present in cart', '', {
        duration: 2000,
      })
    }
   
  }


}


