import { Observable, of } from "rxjs";

export class UserServiceServiceMock {
  login(data: any):Observable<boolean> {
    return of(true);
  }

  
}



