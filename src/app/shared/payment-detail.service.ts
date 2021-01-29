
import { Injectable } from '@angular/core';
import { PaymentDetailComponent } from '../payment-details/payment-detail/payment-detail.component';
import {PaymentDetail} from './payment-detail.model';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class PaymentDetailService {
formData:PaymentDetail
readonly rooturl='https://localhost:44346/api/PaymentDetails';
list : PaymentDetail[];
  constructor(private http:HttpClient) { }
  getList(): Observable<PaymentDetail[]> {
    return this.http.get<PaymentDetail[]>(this.rooturl+ '/GetPaymentDetails');
  }
  postPaymentdetail(){
    return this.http.post(this.rooturl +'/PostPaymentDetails',this.formData);
  }
  putPaymentDetail() {
    return this.http.put(this.rooturl + '/PutPaymentDetails/'+ this.formData.PMId, this.formData);
  }
  deletePaymentDetail(id) {
    return this.http.delete(this.rooturl + '/DeletePaymentDetails/'+ id);
  }
  
  refreshList(){
    this.http.get(this.rooturl + '/GetPaymentDetails').subscribe(res => this.list = res as PaymentDetail[]);
  }
}
