import { Component, OnInit } from '@angular/core';
import { BooksService } from '../services/booksService/books.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss']
})
export class WishlistComponent implements OnInit {
  wishitems: any;
  whishitemscount: any;
  constructor(private bookService:BooksService) { }

  ngOnInit(): void {
   this.wishlist();
  }

  wishlist() {
    this.bookService.getwishlist().subscribe((response: any) => { 
      console.log("wishlist items",response); 
      this.wishitems = response.result; 
      this.whishitemscount = response.result.length; 
      console.log(this.wishitems)
     }
    )
  }

  deletewishlistitem(data: any) {
    this.bookService.removewishlistitem(data.product_id._id).subscribe((response:any) => { 
      console.log(response); 
      this.wishlist() 
    },
      (error:any) => console.log(error)
    )
  }



}
