import { Component, OnInit } from '@angular/core';
import { BooksService } from '../services/booksService/books.service';
import { UpdateBookComponent } from '../update-book/update-book.component';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  booksArray: any;
  bookcount: any;

  constructor(private bookservice: BooksService, private _snackBar: MatSnackBar, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.getBooks();
  }

  getBooks() {
    this.bookservice.getBooksService().subscribe((response: any) => {
        console.log(response.result)
        this.booksArray = response.result.reverse();
        this.bookcount = response.result.length;
        console.log("getBooksArray", this.booksArray);
      })
  }


  openDialog(book: any) {
    const dialogRef = this.dialog.open(UpdateBookComponent, {
      width: "600px",
      height: "400px",
      data: book,

    });


    dialogRef.afterClosed().subscribe((result:any) => {
      this.getBooks()
      console.log(`Dialog result: ${result}`);

    });
  }

  delete(book:any){
    this.bookservice.deleteBook(book._id).subscribe((response:any)=>{
      console.log(response);
      this.getBooks();
      
    })
  }

}
