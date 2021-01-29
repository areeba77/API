import { PaymentDetailService } from './../../shared/payment-detail.service';
import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { PaymentDetail } from 'src/app/shared/payment-detail.model';
import { PaymentDetailListComponent } from '../payment-detail-list/payment-detail-list.component';

@Component({
  selector: 'app-payment-detail',
  templateUrl: './payment-detail.component.html',
  styleUrls: ['./payment-detail.component.css']
})
export class PaymentDetailComponent implements OnInit {
  paymentlist : PaymentDetail[];
  constructor(public service:PaymentDetailService,public toastr:ToastrService) { }

  ngOnInit(): void {
    this.resetForm();
   
  }
  resetForm(form?: NgForm) {
    if (form != null)
      form.form.reset();
    this.service.formData = {
      PMId: 0,
      CardOwnerName: '',
      CardNumber: '',
      ExpirationDate: '',
      CVV: ''
    }
  }

  onSubmit(form: NgForm) {
    if (this.service.formData.PMId == 0)
      this.insertRecord(form);
    else
      this.updateRecord(form);
      //let myCompTwoObj = new PaymentDetailListComponent(this.service,this.toastr);
      //myCompTwoObj.refreshlist();
  }

  insertRecord(form: NgForm) {
    this.service.postPaymentdetail().subscribe(
      res => {
        debugger;
        this.resetForm(form);
        
        this.toastr.success('Submitted successfully', 'Payment Detail Register');
        window.location.reload()
      },
      err => {
        debugger;
        console.log(err);
      }
    )
  }
  updateRecord(form: NgForm) {
    this.service.putPaymentDetail().subscribe(
      res => {
      
        this.resetForm(form);
        //this.service.refreshList();
        window.location.reload()
     ///this.PaymentDetailListComponent.refreshlist();
        //this.service.getList().subscribe(data => {this.paymentlist=data});
        this.toastr.info('Updated successfully', 'Payment Detail Register');
       
      },
      err => {
        console.log(err);
      }
    )
  }
  populateForm(pd:PaymentDetail){
    this.service.getList().subscribe(data => {this.paymentlist=data});
    
   }
}
