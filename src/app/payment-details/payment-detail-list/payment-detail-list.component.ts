import { ToastrService } from 'ngx-toastr';
import { PaymentDetailService } from './../../shared/payment-detail.service';
import { Component, Input, OnInit } from '@angular/core';
import { PaymentDetail } from 'src/app/shared/payment-detail.model';
import { SelectItem, FilterMatchMode } from 'primeng/api';

@Component({
  selector: 'app-payment-detail-list',
  templateUrl: './payment-detail-list.component.html',
  styleUrls: ['./payment-detail-list.component.css']
})
export class PaymentDetailListComponent implements OnInit {
  paymentlist : PaymentDetail[]; 
 
  page = 1;
  count = 0;
  tableSize = 4;
  tableSizes = [3, 6, 9, 12];
  cols: any[];
  matchModeOptions: SelectItem[];
  loading: boolean = true;
  
  // onTableDataChange(event){
  //   this.page = event;
  //   this.service.getList().subscribe(data => {
  //     this.paymentlist=data;
  //   });
  // }  

  // onTableSizeChange(event): void {
  //   this.tableSize = event.target.value;
  //   this.page = 1;
  //   this.service.getList().subscribe(data => {this.paymentlist=data});
  // }  
  constructor(public service:PaymentDetailService,public toastr:ToastrService) { }
 
  ngOnInit(): void {
   
    this.service.getList().subscribe(data => {
      this.paymentlist=data;
      this.loading=false;
      console.log(this.paymentlist);
    });
    
      //const customFilterName = 'custom-equals';

      // this.filterService.register(customFilterName, (value, filter): boolean => {
      //     if (filter === undefined || filter === null || filter.trim() === '') {
      //         return true;
      //     }
  
      //     if (value === undefined || value === null) {
      //         return false;
      //     }
          
      //     return value.toString() === filter.toString();
      // });

      // this.cols = [
      //     { field: 'CardOwnerName', header: 'CardOwnerName' },
      //     { field: 'CardNumber', header: 'CardNumber' },
      //     { field: 'ExpirationDate', header: 'ExpirationDate' },
        
      // ];

      // this.matchModeOptions = [
      //     { label: 'Custom Equals', value: customFilterName },
      //     { label: 'Starts With', value: FilterMatchMode.STARTS_WITH },
      //     { label: 'Contains', value: FilterMatchMode.CONTAINS },
      // ];



  }
 
populateForm(payment:PaymentDetail){
 this.service.formData=Object.assign({},payment);
}
onDelete(PMId) {
  if (confirm('Are you sure to delete this record ?')) {
    this.service.deletePaymentDetail(PMId)
      .subscribe(res => {
        debugger;
        this.service.getList().subscribe(data => {this.paymentlist=data});
        this.toastr.warning('Deleted successfully', 'Payment Detail Register');
      },
        err => {
          debugger;
          console.log(err);
        })
  }}
  refreshlist(){
    this.service.getList().subscribe(data => {this.paymentlist=data});
  }
}
