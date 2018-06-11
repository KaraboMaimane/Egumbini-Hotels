import { Component} from '@angular/core';
import bookingslist from '../arrays';
import { Booking } from '../booking';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent{
  bookingsarray = bookingslist;

  deleteBooking(i){
    this.bookingsarray.splice(i, 1);
  }
}
