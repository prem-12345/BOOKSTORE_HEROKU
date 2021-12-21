import { Injectable } from '@angular/core';
import { HttpServiceService } from '../http-service.service';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  token: any;
  booksArray: any;

  constructor( private httpService: HttpServiceService) { 
    
  }

  getBooksService() {
    this.token = localStorage.getItem('token')
    console.log("data is in books service",);
      let options = {
        headers: new HttpHeaders({
          'Content-type': 'application/json',
        })
      }
      return this.httpService.Getservice('/bookstore_user/get/book', false, options);
  }

  addcartitem(productID: any) {
    console.log("data is in books service",);
      let options = {
        headers: new HttpHeaders({
          'Content-type': 'application/json',
          'x-access-token': this.token,
        })
      }
    return this.httpService.postService("/bookstore_user/add_cart_item/" + productID, null, true, options);
  }

  updateitemcount(productID: any, payload: any) {
    console.log('added', payload);
    let options = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'x-access-token': this.token,
      })
    }
    return this.httpService.PutService("/bookstore_user/cart_item_quantity/" + productID, payload, true, options);
  }
  
  getCartItems() {
    this.token = localStorage.getItem('token')
    let options = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'x-access-token': this.token,
      })
    }
    return this.httpService.Getservice("/bookstore_user/get_cart_items", true, options)
  }

  removecartitem(productID: any) {
    let options = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'x-access-token': this.token,
      })
    }
    return this.httpService.DeleteService("/bookstore_user/remove_cart_item/" + productID, null, true, options);
  }

  addwishlist(productID: any) {
    let options = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'x-access-token': this.token,
      })
    }
    return this.httpService.postService("/bookstore_user/add_wish_list/" + productID, null, true, options);
  }


  getwishlist() {
    this.token = localStorage.getItem('token')
    let options = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'x-access-token': this.token,
      })
    }

    return this.httpService.Getservice("/bookstore_user/get_wishlist_items", true, options)
  }

  removewishlistitem(productID: any) {
    let headers = {
      headers: new HttpHeaders({
        'content-Type': 'application/json',
        'x-access-token': this.token
      })
    }
    return this.httpService.DeleteService("/bookstore_user/remove_wishlist_item/" + productID, null, true, headers);
  }


  customerDetailsService(data:any){
    this.token = localStorage.getItem('token')
    let options = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'x-access-token': this.token,
      })
    }
    return this.httpService.PutService('/bookstore_user/edit_user', data ,true, options)

  }

  orderplace(payload: any) {
    let options = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'x-access-token': this.token,
      })
    }
    return this.httpService.postService("/bookstore_user/add/order", payload, true, options);
  }


  addFeedbackService(data: any) {

    this.token = localStorage.getItem('token')
    let options = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'x-access-token': this.token
      })
    }
    console.log('data', data.product_id);
    
    return this.httpService.postService(`/bookstore_user/add/feedback/${data.product_id}`, data, true, options)
  }

  getfeedBack(data: any) {
    this.token = localStorage.getItem('token')
    let options = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'x-access-token': this.token
      })
    }
   
    return this.httpService.Getservice(`/bookstore_user/get/feedback/${data.product_id}`, true, options);

  }


  addBooks(reqData:any) {
    console.log("data is in books service",);
      let options = {
        headers: new HttpHeaders({
          'Content-type': 'application/json',
          'x-access-token': this.token,
        })
      }
    return this.httpService.postService("/bookstore_user/admin/add/book", reqData, true, options);
  }


  updateBooks(productID: any, reqData:any){

      let options = {
        headers: new HttpHeaders({
          'Content-type': 'application/json',
          'x-access-token': this.token,
        })
      }
    return this.httpService.PutService("/bookstore_user/admin/update/book/" + productID, reqData, true, options);

  }


  deleteBook(productID: any) {

    let headers = {
      headers: new HttpHeaders({
        'content-Type': 'application/json',
        'x-access-token': this.token
      })
    }
    return this.httpService.DeleteService("/bookstore_user/admin/delete/book/" + productID, null, true, headers);
  }



}
