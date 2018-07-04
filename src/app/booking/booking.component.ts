import { Component} from '@angular/core';
import bookingslist from '../arrays';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent{
  bookingsarray = bookingslist;
  sum = 0;
  tenantsTotal: number = 0;
  inc: number = 0;

  deleteBooking(i){
    this.bookingsarray.splice(i, 1);
  }

  check(value, tenants){
    if(value > 0){
      this.sum += value + (value * tenants);
      return this.sum;
    }
  }
  tenants(value){
    
    if(value > 0){
      this.inc = bookingslist.length;
      console.log(this.inc);
      this.tenantsTotal += parseInt(value);
      this.tenantsTotal + this.inc;
      return this.tenantsTotal;
    }
  }

}
