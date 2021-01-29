import { PaymentDetailService } from './shared/payment-detail.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { PaymentDetailComponent } from './payment-details/payment-detail/payment-detail.component';
import { PaymentDetailListComponent } from './payment-details/payment-detail-list/payment-detail-list.component';
import { PaymentDetailsComponent } from './payment-details/payment-details.component';
import {FormsModule} from '@angular/forms';
import { from } from 'rxjs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {NgxPaginationModule} from 'ngx-pagination';
import { ToastrModule } from 'ngx-toastr';
import {TableModule} from 'primeng/table'

@NgModule({
  declarations: [
    AppComponent,
    PaymentDetailComponent,
    PaymentDetailListComponent,
    PaymentDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,  
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    NgxPaginationModule,
    TableModule
  ],
  providers: [PaymentDetailService],
  bootstrap: [AppComponent]
})
export class AppModule { }
