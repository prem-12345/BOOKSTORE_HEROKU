import { Component, OnInit } from '@angular/core';
import { BooksService } from '../services/booksService/books.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data service/data.service';

@Component({
  selector: 'app-my-cart',
  templateUrl: './my-cart.component.html',
  styleUrls: ['./my-cart.component.scss']
})
export class MyCartComponent implements OnInit {
  cartitems: any;
  count: any;
  ordercount = 1;
  displayButton:boolean=true;
  displayaddresss:boolean=true;
  displayOrders:boolean=true;
  orderlist: any = [];
  step = 0;
 
  customerDetailsForm !: FormGroup;

  constructor(private bookService: BooksService,private formBuilder: FormBuilder,private routes: Router, private dataservice: DataService) { }

  ngOnInit(): void {
    this.cartItemList();

    this.customerDetailsForm = this.formBuilder.group({
      fullName: ['', Validators.required],
      phoneNumber: ['', [Validators.required]],
      fullAddress: ['', [Validators.required, Validators.minLength(6)]],
      city: ['', [Validators.required]],
      state: ['', Validators.required],
      addressType: ['', Validators.required]

    })
    
  }

  submit(){

    console.log(this.customerDetailsForm.value);
  
    let reqData={
      fullName  : this.customerDetailsForm.value.fullName,
      phonenumber : this.customerDetailsForm.value.phoneNumber,
      fullAddress  : this.customerDetailsForm.value.fullAddress,
      city : this.customerDetailsForm.value.city,
      state : this.customerDetailsForm.value.state,
      addressType : this.customerDetailsForm.value.addressType,
      service : "advance"
    }
    this.bookService.customerDetailsService(reqData).subscribe((response:any)=>{
      console.log("customer details" , response);
      
    })
    
  }

  showDetails(){
    this.displayButton = false;
    this.displayaddresss = false;
  }

  showOrderDetails(){
    this.displayOrders=false;
  }

  cartItemList() {
    this.bookService.getCartItems().subscribe((response: any) => {
        console.log(response);
        this.cartitems = response.result;
        console.log(this.cartitems);
        this.count = response.result.length;

        this.dataservice.changeMessage(this.count)
      })
  }

  removecartitem(data: any) {
    this.bookService.removecartitem(data._id).subscribe((response) =>{ 
      console.log(response); 
      this.cartItemList();
    },
      (error) => console.log(error)
    )
  }

  countincrease(data: any) {
    this.ordercount = data.quantityToBuy;
    this.ordercount += 1
    console.log("number of quantity to buy", this.ordercount);
    this.updateCount(data)
  }

  countdecrease(data: any) {
    this.ordercount = data.quantityToBuy;
    if (this.ordercount > 0) {
      this.ordercount -= 1;
    }
    else {
      return;
    }
    this.updateCount(data)
  }

  updateCount(data: any) {
    let payload = {
      "quantityToBuy": this.ordercount
    }
    console.log("quantity to Buy", this.ordercount);

    this.bookService.updateitemcount(data.product_id._id, payload).subscribe((response) => {
      console.log(response);
    },
      (error) => console.log(error)
    )
    this.cartItemList();
  }


  Checkout(){

    this.cartitems.forEach((element: any) => {
      this.orderlist.push(
        {
          "product_id": element.product_id._id,
          "product_name": element.product_id.bookName,
          "product_quantity": element.quantityToBuy,
          "product_price": element.product_id.price - element.product_id.discountPrice
        }
      );
    });
    console.log(this.orderlist);

    let payload = {
      "orders": this.orderlist
    }
    this.bookService.orderplace(payload).subscribe((response:any) => {
        console.log(response);
        this.routes.navigateByUrl("/dashboard/orderplaced")
      },
      (error:any) => console.log(error)
    )
  }


  

  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }



  }

  


