import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { LogInComponent } from './components/log-in/log-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { AuthguardGuard } from './components/services/authguardService/authguard.guard';
import { GetAllBooksComponent } from './components/get-all-books/get-all-books.component';
import { BookDetailsComponent } from './components/book-details/book-details.component';
import { WishlistComponent } from './components/wishlist/wishlist.component';
import { MyCartComponent } from './components/my-cart/my-cart.component';
import { OrderplacedComponent } from './components/orderplaced/orderplaced.component';
import { AdminComponent } from './components/admin/admin.component';
import { AddBooksComponent } from './components/add-books/add-books.component';
import { ProfileComponent } from './components/profile/profile.component';
import { UpdateBookComponent } from './components/update-book/update-book.component';


const routes: Routes = [
  { path: '', redirectTo: 'log-in', pathMatch: 'full' },
  { path: 'log-in', component: LogInComponent },
  { path: 'sign-up', component: SignUpComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'book-details/:bookId', component: BookDetailsComponent },
  { path: 'my-cart', component: MyCartComponent },
  { path: 'wishlist', component: WishlistComponent },
  { path: 'admin' , component: AdminComponent},
  { path: 'add-books' , component: AddBooksComponent},
  { path: 'profile' , component: ProfileComponent},
  { path: 'update-books' ,component: UpdateBookComponent},
  {
    path: 'dashboard', component: DashboardComponent, canActivate: [AuthguardGuard],
    children: [
      { path: '', redirectTo: 'get-all-books', pathMatch: 'full' },
      { path: 'get-all-books', component: GetAllBooksComponent },
      { path: 'book-details/:bookId', component: BookDetailsComponent },
      { path: 'orderplaced', component: OrderplacedComponent}
    ]

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
