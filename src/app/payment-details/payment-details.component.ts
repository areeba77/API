import { Component, OnInit } from '@angular/core';
import { PaymentDetail } from '../shared/payment-detail.model';
import { PaymentDetailService } from '../shared/payment-detail.service';

@Component({
  selector: 'app-payment-details',
  templateUrl: './payment-details.component.html',
  styleUrls: ['./payment-details.component.css']
})
export class PaymentDetailsComponent implements OnInit {
  paymentlist : PaymentDetail[];
  constructor(public service:PaymentDetailService) { }

  ngOnInit(): void {
  }
  getPaymentList() {  
    this.service.getList().subscribe(data => {this.paymentlist=data});
  }
}
