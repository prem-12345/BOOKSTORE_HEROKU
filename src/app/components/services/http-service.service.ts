import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {

  BaseUrl = environment.BaseUrl;
  token: any;

  constructor(private httpClient: HttpClient) { }

  postService(url = '', reqPayLoad: any = null, token: boolean = false, httpOptions: any = {}) {
    console.log('Data in http service', reqPayLoad);
    return this.httpClient.post(this.BaseUrl + url, reqPayLoad, token && httpOptions)
  }

  Getservice(url = '', token: boolean = false, httpOptions: any = {}) {
    console.log('Data in http service');
    return this.httpClient.get(this.BaseUrl + url,token && httpOptions)
  }

  PutService(url: string,data: any = null, token: boolean = false, httpOptions: any = {}) {
    console.log('Data in http service');
    return this.httpClient.put(this.BaseUrl + url,data,token && httpOptions)
  }

  DeleteService(url: string, data: any = null, token: any = false, httpOptions: any = {}) {
    console.log('Data in http service');
    return this.httpClient.delete(this.BaseUrl + url, token && httpOptions)
  }


}
